import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { checkImport, checkSourceName, getImports } from './architectureRules.js';

const ignoredDirectories = new Set(['node_modules', 'dist', '.next', 'generated', 'coverage']);
async function collectFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    if (ignoredDirectories.has(entry.name)) continue;
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collectFiles(entryPath)));
    else if (/\.tsx?$/.test(entry.name)) files.push(entryPath.replaceAll('\\', '/'));
  }
  return files;
}

async function checkArchitecture(): Promise<void> {
  const files = [
    ...(await collectFiles('apps')),
    ...(await collectFiles('packages')),
    ...(await collectFiles('scripts')),
  ];
  const errors: string[] = [];
  for (const file of files) {
    const source = await readFile(file, 'utf8');
    const violations = [
      ...checkSourceName(file),
      ...getImports(file, source).flatMap((specifier) => checkImport(file, specifier)),
    ];
    errors.push(...violations.map((violation) => file + ': ' + violation));
  }
  if (errors.length) throw new Error(errors.join('\n'));
  console.log('Architecture and naming checks passed (' + files.length + ' files).');
}
void checkArchitecture().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : 'Architecture check failed');
  process.exitCode = 1;
});
