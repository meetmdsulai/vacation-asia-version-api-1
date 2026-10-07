import path from 'node:path';
import ts from 'typescript';

const normalizePath = (value: string): string => value.replaceAll('\\', '/');
const moduleLayers = new Set(['application', 'domain', 'infrastructure', 'presentation']);
const apiRootFiles = new Set(['appModule.ts', 'configureApp.ts', 'main.ts']);
const sourcePattern = /^[a-z][a-zA-Z0-9]*(?:\.(?:test|spec))?\.(?:ts|tsx)$/;
const fileExceptions = new Set(['next-env.d.ts', 'next.config.ts', 'prisma.config.ts']);

export function checkSourceName(file: string): string[] {
  const parts = normalizePath(file).split('/');
  const name = parts.pop() ?? '';
  const errors: string[] = [];
  if (!sourcePattern.test(name) && !fileExceptions.has(name))
    errors.push('Source file must use camelCase');
  if (parts.some((part) => !/^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$/.test(part)))
    errors.push('Source folders must use snake_case');
  return errors;
}

export function getImports(file: string, source: string): string[] {
  const imports: string[] = [];
  const tree = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
  function visit(node: ts.Node): void {
    if (
      (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) &&
      node.moduleSpecifier &&
      ts.isStringLiteral(node.moduleSpecifier)
    )
      imports.push(node.moduleSpecifier.text);
    if (
      ts.isCallExpression(node) &&
      (node.expression.kind === ts.SyntaxKind.ImportKeyword ||
        (ts.isIdentifier(node.expression) && node.expression.text === 'require'))
    ) {
      const argument = node.arguments[0];
      if (argument && ts.isStringLiteral(argument)) imports.push(argument.text);
    }
    ts.forEachChild(node, visit);
  }
  visit(tree);
  return imports;
}

export function checkImport(file: string, specifier: string): string[] {
  const normalized = normalizePath(file);
  const errors: string[] = [];
  const target = specifier.startsWith('.')
    ? normalizePath(
        path.posix.normalize(path.posix.join(path.posix.dirname(normalized), specifier)),
      )
    : specifier;
  const packageName = normalized.match(/^packages\/([^/]+)\//)?.[1];
  const isCoreLayer = /\/(application|domain)\//.test(normalized);
  if (
    target.includes('.agents') ||
    specifier.includes('grpc') ||
    specifier === '@nestjs/microservices'
  )
    errors.push('ARCH-HYB-001/008: runtime reference code and local RPC are prohibited');
  if (
    normalized.startsWith('apps/web/') &&
    (target.startsWith('apps/api/') || /(?:database|prisma|adapter-pg)/.test(specifier))
  )
    errors.push('Web must not access API internals or persistence');
  if (specifier.startsWith('@vacation_asia/') && specifier.split('/').length > 2)
    errors.push('Import workspace packages through their public exports');
  if (
    specifier.startsWith('.') &&
    ((normalized.startsWith('apps/') && target.startsWith('packages/')) ||
      (packageName && !target.startsWith('packages/' + packageName + '/')))
  )
    errors.push('Use package exports across workspace boundaries');
  if (packageName && target.startsWith('apps/'))
    errors.push('Shared packages must not depend on applications');
  if (
    isCoreLayer &&
    (/^(@nestjs\/|@prisma\/|@vacation_asia\/database|pg$)/.test(specifier) ||
      /\/(infrastructure|presentation)\//.test(target))
  )
    errors.push('Application/domain code must remain independent of frameworks and persistence');
  if (
    /(@vacation_asia\/database|@prisma\/|^pg$)/.test(specifier) &&
    normalized.startsWith('apps/api/src/') &&
    !normalized.includes('/infrastructure/')
  )
    errors.push('Only infrastructure adapters may import database tooling');
  const sourceOwner = normalized.match(/^apps\/api\/src\/([^/]+)\//)?.[1];
  const targetOwner = target.match(/^apps\/api\/src\/([^/]+)\//)?.[1];
  if (sourceOwner && targetOwner && sourceOwner !== targetOwner && targetOwner !== 'config') {
    const tail = target.split('/').slice(4);
    if (tail[0] !== 'contracts')
      errors.push('ARCH-HYB-005: cross-module dependencies must use contracts and ports');
  }
  if (
    normalized.startsWith('apps/api/src/') &&
    !sourceOwner &&
    !apiRootFiles.has(path.posix.basename(normalized))
  )
    errors.push('Add new capabilities inside an owning module');
  if (sourceOwner && moduleLayers.has(sourceOwner))
    errors.push('Layers must live inside an owning module');
  return errors;
}
