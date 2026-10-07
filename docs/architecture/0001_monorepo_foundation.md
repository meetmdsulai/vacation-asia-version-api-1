# ADR 0001: Initial monorepo foundation

Status: implements the approved modular-monolith architecture.
Scope: infrastructure and bootstraps only; no new business rules.

## Loaded authority

Root `AGENTS.md`; all five `.agents/core/` files; business-rule registry and
coverage matrix; Architecture Governor, Database Architect, Security Review,
DevOps Delivery and QA Testing profiles; both architecture knowledge files;
Saga standard; database-change and feature-development workflows; source-table audit.

No business contract is implemented. Existing product, availability, pricing,
booking and payment contracts remain unchanged.

## Decision

Use a pnpm workspace, strict TypeScript, Next.js App Router and NestJS with explicit
dependency injection. Shared packages have explicit public exports. Application
and domain services remain independent of NestJS, persistence and transport.
Nest modules are composition roots; infrastructure adapters implement typed ports.

The health capability demonstrates the dependency direction:

`HTTP controller -> HealthService -> DatabaseHealthPort <- PrismaHealthAdapter`

The adapter binding is local. Future service extraction may substitute an adapter
behind the port without changing application logic. No gRPC dependency, network
module simulation, generic repository, Saga engine or event bus is introduced.

PostgreSQL is authoritative. Prisma is the default persistence mechanism, isolated
inside infrastructure adapters. The database package supplies client construction
only; it is not a cross-domain repository. Future owning-domain repositories and
query services must enforce data ownership. Shared client infrastructure does not
authorize cross-domain table access.

Redis and RabbitMQ have local infrastructure placeholders only. Future reliable
asynchronous workflows require transactional outbox/inbox design and RabbitMQ.
Saga applies only to cross-domain state-changing workflows; reads use query
services. The extraction-specific edge-without-database rule applies when an
edge tier is deployed, not to the current in-process Nest composition root.

## Architecture Governor review

- Local port/provider binding preserves replacement by a future remote adapter.
- No business modules, cross-domain table access or distributed transactions.
- Static guards reject application/domain dependencies on frameworks/persistence,
  cross-module internal imports, web persistence access, local gRPC and runtime
  imports from `.agents/`.
- Guards complement review; they are not a security sandbox. New aliases,
  computed imports or domain schema additions require explicit boundary review.

## Database Architect review

- PostgreSQL datasource and generated Prisma Client; empty model set.
- No tables, migrations, keys, indexes, business history or idempotency schema
  are justified yet. None are invented.
- Client generation works without a live database or credentials. Migration
  commands need DATABASE_URL, load local .env only for developer convenience,
  and run separately from application startup.
- Future physical identifiers must use snake_case, mapped with @map/@@map.
  Every migration requires ownership, constraints, indexes, history,
  backward-compatibility and relevant test review.
- Readiness performs SELECT 1 only, with bounded connection/query timeouts and
  disconnect on shutdown. It does not access business tables.

## Naming and tooling exceptions

Ordinary TypeScript/TSX source files use camelCase; folders use snake_case.
Framework-required `next.config.ts`, `next-env.d.ts`, `prisma.config.ts`,
`.next/`, `.github/`, `node_modules/` and conventional tool configuration
filenames are exceptions. Prisma-generated filenames are tool-owned and ignored
by naming/format checks. Database driver option names and environment keys are
preserved only at their external adapter boundaries.

Prettier retains the supplied repository settings. Imported authoritative
knowledge is excluded from formatting to avoid unrelated source changes.

## Rule coverage

| Rule IDs                      | Foundation treatment                                                   |
| ----------------------------- | ---------------------------------------------------------------------- |
| ARCH-HYB-001                  | Nest modular monolith, Prisma infrastructure, no local gRPC            |
| ARCH-HYB-002                  | Transaction policy retained; no writes to implement                    |
| ARCH-HYB-003                  | Health reads use a service/port, not a Saga                            |
| ARCH-HYB-004                  | Reserved for future cross-domain commands                              |
| ARCH-HYB-005                  | Framework-independent typed port and local adapter binding             |
| ARCH-HYB-006                  | No remote data-access contracts introduced                             |
| ARCH-HYB-007                  | Redis/RabbitMQ placeholders; outbox policy retained                    |
| ARCH-HYB-008                  | TypeScript application code, adapters, checks and tests                |
| ENG-FMT-001..003, ENG-FMT-006 | Prettier, ESLint naming, file/folder guards                            |
| ENG-FMT-004..005              | Empty PostgreSQL schema; mapping standards documented for first models |
| SAGA-STD-001..006             | Deferred constraints; no Saga implementation                           |

## Conflicts and clarifications

RULE CONFLICT: none in foundation scope.
NEEDS_CLARIFICATION: none blocking implementation. Deployment host, production
secret manager and identity/access design remain decisions for their owning future
tasks. Existing unresolved domain rules are unaffected.
