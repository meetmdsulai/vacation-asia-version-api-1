# Vacation Asia

TypeScript modular-monolith foundation. Business capabilities are intentionally not implemented.

## Prerequisites and setup

- Node.js 24 and pnpm 10.34.6 (the exact package-manager version is pinned).
- Docker with Compose v2 for local PostgreSQL, Redis and RabbitMQ.

If pnpm is unavailable, use `npx --yes pnpm@10.34.6 <command>` in place of `pnpm <command>`.

```sh
pnpm install --frozen-lockfile
```

Copy `.env.example` to `.env` (PowerShell: `Copy-Item .env.example .env`), then:

```sh
pnpm infra:up
pnpm dev
```

Web: http://localhost:3000. API liveness: http://127.0.0.1:3001/health.
API readiness: http://127.0.0.1:3001/health/ready.

`/health` returns 200 without accessing dependencies. `/health/ready` executes a
bounded PostgreSQL probe through a local port adapter; failure returns a sanitized 503. Redis and RabbitMQ are placeholders and do not gate readiness. API startup
requires valid configuration but does not require a working database connection.

## Commands

| Command                                 | Purpose                                                             |
| --------------------------------------- | ------------------------------------------------------------------- |
| `pnpm format` / `pnpm format:check`     | Write/check Prettier formatting                                     |
| `pnpm lint`                             | ESLint plus architecture and file/folder naming guards              |
| `pnpm typecheck`                        | Generate Prisma, build shared packages, check strict TypeScript     |
| `pnpm test`                             | Vitest configuration/architecture/web tests and Jest API HTTP tests |
| `pnpm test:smoke`                       | Check built API/web startup and unavailable-database readiness      |
| `pnpm build`                            | Build packages before dependent API and web applications            |
| `pnpm db:validate` / `pnpm db:generate` | Validate schema / generate Prisma Client                            |
| `pnpm db:migrate`                       | Create/apply development migrations after an approved schema change |
| `pnpm db:deploy`                        | Apply reviewed migrations in deployment                             |
| `pnpm infra:up` / `pnpm infra:down`     | Start/stop local dependencies; down retains data volumes            |

After `pnpm build`, start the applications with
`pnpm --filter @vacation_asia/api start` and
`pnpm --filter @vacation_asia/web start` in separate terminals.
Development watches application code; restart `pnpm dev` after editing shared packages.

## Layout

- `apps/web`: public Next.js App Router bootstrap.
- `apps/api`: NestJS composition root and health capability.
- `packages/config`: validated environment adapters; no secrets in errors.
- `packages/contracts`: framework-independent public health response types.
- `packages/database`: Prisma client factory, schema and migration tooling.
- `infra`: local-only dependency services.
- `scripts`: architecture/naming checks and their regression tests.
- `docs/architecture`: foundation decision and review record.

See [the foundation ADR](docs/architecture/0001_monorepo_foundation.md)
for boundaries and Rule ID mapping. The source of approved business knowledge
remains `.agents/`; application code must never import its reference implementations.

## Environment and security

Only the API reads the root `.env`; production supplies environment variables
through the chosen secrets-management mechanism. The web has no database
configuration and no public secret variables. Local example credentials are
development placeholders, not deployment credentials. Never commit real secrets.

The API uses Helmet, an explicit CORS origin, strict DTO validation and shutdown
hooks. Health routes are intentionally public and expose no business data.
Authentication and authorization must be designed before adding protected routes.
CORS is not authentication.

Compose is for local development only. Its ports bind to loopback. Production
TLS, identity, secret-manager integration, image digest policy and deployment
topology need a separate delivery decision. No migration runs automatically on API startup.

## Verification

CI installs the frozen lockfile and runs formatting, lint, Prisma validation,
typecheck, tests, production builds and runtime smoke checks without live infrastructure. API tests
replace the database health port, so they verify HTTP behavior and boundaries
without pretending to test PostgreSQL. A Docker-capable environment must also
run Compose and verify readiness against PostgreSQL before deployment.
