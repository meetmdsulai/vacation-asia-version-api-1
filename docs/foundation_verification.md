# Foundation implementation and verification

Verified on 2026-10-07 using Node.js 24.21.0 and pnpm 10.34.6 on Windows.

## Outcome

The initial modular-monolith foundation is implemented. No Hotel, Transport,
Sightseeing, Meal, Package, Quotation, Booking or Payment business code, business
models, migrations or speculative tables were added.

See [the ADR](architecture/0001_monorepo_foundation.md) for loaded instructions,
architecture/database review, naming exceptions and Rule ID coverage. See the
[root README](../README.md) for setup and operational commands.

## Commands and results

pnpm was not installed globally. Commands were executed using
`npx --yes pnpm@10.34.6` (and the same downloaded pnpm entry point for the initial
formatting check). Sandbox restrictions required approved execution for package
registry access and tooling/runtime checks.

| Command                          | Final result                                                  |
| -------------------------------- | ------------------------------------------------------------- |
| `pnpm install --frozen-lockfile` | Passed; lockfile current                                      |
| `pnpm format`                    | Passed                                                        |
| `pnpm lint`                      | Passed; ESLint and 25-file architecture/naming check          |
| `pnpm typecheck`                 | Passed; root tooling and all five workspace packages/apps     |
| `pnpm test`                      | Passed; 24 Vitest tests and 5 Jest HTTP tests                 |
| `pnpm build`                     | Passed; shared packages, NestJS and Next.js production builds |
| `pnpm format:check`              | Passed                                                        |
| `pnpm db:validate`               | Passed; empty PostgreSQL Prisma schema                        |
| `pnpm db:generate`               | Passed as part of preparation/build; no database required     |
| `pnpm test:smoke`                | Passed against final built applications                       |

Smoke checks verify the built web responds with the landing page, API liveness
returns 200, and real Prisma readiness against an unavailable PostgreSQL endpoint
returns a sanitized 503. The processes are stopped after verification.

Initial implementation failures in malformed URL validation, a boundary test
path and a naming exception were fixed. Tooling compatibility was resolved with
the direct Next.js ESLint plugin and ESLint 10. The final suite is green.

## Verification limits

Docker and psql were unavailable on PATH. Live PostgreSQL connectivity and the
Compose Redis/RabbitMQ services were not exercised. Successful database readiness
is tested through the injected port, not presented as a live database integration
test. CI is configured but has not been run on a remote runner.

pnpm reports an ignored optional @parcel/watcher dependency build script. The
required typechecks, tests, builds and smoke checks pass without it.

## Rules and remaining decisions

Implemented foundation portions: ARCH-HYB-001, ARCH-HYB-003, ARCH-HYB-005,
ARCH-HYB-008, ENG-FMT-001..003 and ENG-FMT-006. Remaining ARCH-HYB rules,
ENG-FMT-004..005 and SAGA-STD-001..006 are documented constraints for future
writes, models and workflows; they are not claimed as implemented business logic.

RULE CONFLICT: none in scope.
NEEDS_CLARIFICATION: none blocking this foundation. Production deployment host,
secret manager and identity/access design remain future decisions.

Recommended next task: define and approve authentication, authorization and
customer/agency data-access boundaries before implementing protected business
endpoints. Verify Compose and successful PostgreSQL readiness on a Docker-capable
machine before deployment.

## File inventory

Existing `.editorconfig`, `prettier.config.mjs`, `eslint.naming.example.mjs`,
`AGENTS.md`, `INSTALL.md` and authoritative `.agents/` content were retained.
`.prettierignore` was modified to exclude authoritative knowledge and generated
artifacts. Dependencies and build outputs are ignored and are not source artifacts.

Created source/configuration/documentation files:

- `.env.example`
- `.github/workflows/ci.yaml`
- `.gitignore`
- `.node-version`
- `.npmrc`
- `apps/api/jest.config.cjs`
- `apps/api/package.json`
- `apps/api/README.md`
- `apps/api/src/appModule.ts`
- `apps/api/src/config/environment.ts`
- `apps/api/src/configureApp.ts`
- `apps/api/src/health/application/databaseHealthPort.ts`
- `apps/api/src/health/application/healthService.ts`
- `apps/api/src/health/healthModule.ts`
- `apps/api/src/health/infrastructure/prismaHealthAdapter.ts`
- `apps/api/src/health/presentation/healthController.ts`
- `apps/api/src/main.ts`
- `apps/api/test/health.test.ts`
- `apps/api/tsconfig.build.json`
- `apps/api/tsconfig.json`
- `apps/web/next.config.ts`
- `apps/web/next-env.d.ts`
- `apps/web/package.json`
- `apps/web/README.md`
- `apps/web/src/app/globals.css`
- `apps/web/src/app/layout.tsx`
- `apps/web/src/app/page.test.tsx`
- `apps/web/src/app/page.tsx`
- `apps/web/src/instrumentation.ts`
- `apps/web/tsconfig.json`
- `docs/architecture/0001_monorepo_foundation.md`
- `eslint.config.mjs`
- `infra/compose.yaml`
- `package.json`
- `packages/config/package.json`
- `packages/config/src/environment.test.ts`
- `packages/config/src/index.ts`
- `packages/config/tsconfig.build.json`
- `packages/config/tsconfig.json`
- `packages/contracts/package.json`
- `packages/contracts/src/index.ts`
- `packages/contracts/tsconfig.build.json`
- `packages/contracts/tsconfig.json`
- `packages/database/package.json`
- `packages/database/prisma.config.ts`
- `packages/database/prisma/schema.prisma`
- `packages/database/README.md`
- `packages/database/src/index.ts`
- `packages/database/tsconfig.build.json`
- `packages/database/tsconfig.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `README.md`
- `scripts/architectureRules.test.ts`
- `scripts/architectureRules.ts`
- `scripts/checkArchitecture.ts`
- `scripts/smokeTest.ts`
- `tsconfig.base.json`
- `tsconfig.json`
- `vitest.config.ts`
- `docs/foundation_verification.md`
