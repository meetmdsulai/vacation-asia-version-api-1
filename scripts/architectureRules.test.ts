import { describe, expect, it } from 'vitest';
import { checkImport, checkSourceName, getImports } from './architectureRules.js';

describe('architecture guardrails (ARCH-HYB-001/005/008, ENG-FMT-002/003)', () => {
  it('rejects cross-domain repository access', () => {
    expect(
      checkImport(
        'apps/api/src/alpha/application/service.ts',
        '../../beta/infrastructure/repository',
      ),
    ).not.toEqual([]);
  });
  it('allows cross-domain contracts', () => {
    expect(
      checkImport('apps/api/src/alpha/application/service.ts', '../../beta/contracts/port'),
    ).toEqual([]);
  });
  it('rejects persistence and frameworks in application services', () => {
    expect(
      checkImport('apps/api/src/alpha/application/service.ts', '@vacation_asia/database'),
    ).not.toEqual([]);
    expect(checkImport('apps/api/src/alpha/domain/entity.ts', '@nestjs/common')).not.toEqual([]);
  });
  it('allows persistence inside its adapter', () => {
    expect(
      checkImport(
        'apps/api/src/health/infrastructure/prismaHealthAdapter.ts',
        '@vacation_asia/database',
      ),
    ).toEqual([]);
  });
  it('rejects web access to persistence and API internals', () => {
    expect(checkImport('apps/web/src/app/page.tsx', '@vacation_asia/database')).not.toEqual([]);
    expect(checkImport('apps/web/src/app/page.tsx', '../../../api/src/main')).not.toEqual([]);
  });
  it('rejects reference-code runtime imports and local gRPC', () => {
    expect(checkImport('apps/api/src/main.ts', '../../../.agents/reference-code/saga')).not.toEqual(
      [],
    );
    expect(checkImport('apps/api/src/main.ts', '@grpc/grpc-js')).not.toEqual([]);
  });
  it('checks exports, dynamic imports and require calls', () => {
    expect(getImports('example.ts', "export * from 'a'; import('b'); require('c');")).toEqual([
      'a',
      'b',
      'c',
    ]);
  });
  it('enforces names with documented framework exceptions', () => {
    expect(checkSourceName('apps/api/src/health/healthService.ts')).toEqual([]);
    expect(checkSourceName('apps/api/src/health/health.service.ts')).not.toEqual([]);
    expect(checkSourceName('apps/api/src/health-check/service.ts')).not.toEqual([]);
    expect(checkSourceName('apps/web/next.config.ts')).toEqual([]);
  });
});
