# Vacation Asia — Codex Repository Instructions

This repository uses `.agents/` as the authoritative AI engineering and business-knowledge system.

Before making any substantial implementation, architecture, database, workflow, pricing, availability, booking, payment, operations, or domain decision, load the applicable instructions and knowledge from `.agents/`.

## Mandatory baseline

Read these first for substantial work:

- `.agents/core/01-architecture-principles.md`
- `.agents/core/02-domain-boundaries.md`
- `.agents/core/03-engineering-standards.md`
- `.agents/core/04-security-payment.md`
- `.agents/knowledge/business-rule-registry.md`
- `.agents/knowledge/coverage-matrix.md`

Then load the specialist profile and every knowledge/contract/workflow file that profile requires.

## Specialist routing

- Architecture/boundaries → `.agents/agents/architecture-governor.md`
- Database/schema/persistence → `.agents/agents/database-architect.md`
- Quotation/Booking → `.agents/agents/quotation-booking.md`
- Hotel → `.agents/agents/hotel-management.md`
- Transport → `.agents/agents/transport-management.md`
- Ferry → `.agents/agents/ferry-management.md`
- Sightseeing/Activity/Show → `.agents/agents/sightseeing-management.md`
- Meals/Restaurant → `.agents/agents/meal-management.md`
- Guide → `.agents/agents/guide-management.md`
- Packages/Personalization → `.agents/agents/package-personalization.md`
- Pricing/Commercial → `.agents/agents/pricing-commercial.md`
- Payment/Finance/Credit/Receivables → `.agents/agents/payment-finance.md`
- MICE → `.agents/agents/mice-management.md`
- Operations → `.agents/agents/operations-management.md`
- Supplier Portal → `.agents/agents/supplier-portal.md`
- Customer/Agency experience → `.agents/agents/customer-agency-experience.md`
- QA/testing → `.agents/agents/qa-testing.md`
- Security → `.agents/agents/security-review.md`
- Documents/notifications → `.agents/agents/documents-notifications.md`
- DevOps/delivery → `.agents/agents/devops-delivery.md`

For multi-domain work, load every affected specialist profile. Architecture changes require Architecture Governor review; persistence/schema changes require Database Architect review.

## Architecture decision model

Use the simplest approved execution path that satisfies the requirement:

1. Normal CRUD → Prisma ORM.
2. Medium transactional operation → Application/Domain Service + Prisma transaction.
3. Complex read/search/projection → Query Service + Prisma, TypedSQL, parameterized optimized SQL, view/materialized view, or domain-owned DB function when measurably justified.
4. Complex single-domain write → Domain/Application Service + transaction; domain-owned DB function/procedure only when DB-side atomic execution is materially beneficial.
5. Cross-domain state-changing workflow → Saga Orchestrator + Domain Ports.
6. Inside the modular monolith → local TypeScript adapters/providers. Do NOT introduce gRPC between local modules merely for future microservice readiness.
7. Extracted microservice → replace the local adapter with a gRPC adapter behind the same Port/contract.
8. Durable asynchronous integration → transactional outbox + RabbitMQ.
9. PostgreSQL is the source of truth. Redis is optimization/cache only.

## Command/query distinction

Do not use Saga for read-only retrieval.

- Commands change state: create, revise, approve, confirm, book, cancel, allocate, refund, etc.
- Queries read state: get quotation, fetch itinerary, availability search, dashboards, reports, pricing preview, etc.

Complex quotation/booking/itinerary reads belong in Query Services/read models, not Saga orchestration.

## Saga requirements

For cross-domain state-changing workflows read:

- `.agents/knowledge/saga/saga-standard.md`
- applicable files in `.agents/workflows/`
- `.agents/reference-code/saga/README.md` when implementation guidance is needed.

Saga implementations must be transport-independent. Domain Ports may resolve to local adapters today and gRPC adapters after service extraction.

Production Saga behavior must support durable state, successful-step-only compensation registration, partial compensation failure tracking, idempotency, retry/backoff, timeout policy, correlation IDs, recovery/resume, observability, and auditability.

The in-memory Saga store is development/test reference only unless explicitly approved otherwise.

## Business-rule authority

Precedence:

1. Approved Business Rules
2. Approved ADRs
3. Domain Contracts
4. Architecture Standards
5. Coding Standards
6. Specialist Agent Instructions
7. Developer Task Prompt
8. AI Assumptions

Later Product Owner clarification supersedes an older interpretation.

Historical SQL/table examples are reference data models unless explicitly approved as authoritative schema. Extract and preserve the business behavior they represent, but do not blindly reproduce legacy schemas.

Do not invent business rules. If required behavior is not defined, mark it `NEEDS_CLARIFICATION`.

If two approved rules conflict, report `RULE CONFLICT` and stop the conflicting design/implementation decision until resolved.

## Security and data boundaries

- A domain owns its data and persistence rules.
- Do not manipulate another domain's tables/repositories directly.
- Cross-domain behavior goes through contracts/ports.
- Payment remains provider-independent and strongly isolated.
- Do not persist PAN, CVV, PIN, OTP, full card data, or provider authentication secrets.
- Secrets belong in the approved secrets-management mechanism, never source code.
- External DTOs must not leak supplier cost, net price, internal markup, or other protected commercial data.

## TypeScript policy

Application code should be TypeScript across frontend, NestJS applications/services, workers, Saga/orchestration, shared packages, adapters, tests, and generated gRPC clients/types.

`.proto`, SQL/PLpgSQL, infrastructure configuration, migrations, and other necessary non-TypeScript artifacts are allowed where appropriate.

Avoid `any` in domain/application contracts. Prefer generated/explicit strongly typed contracts.

## Before implementation

For substantial work:

1. Identify affected domains.
2. Load this file and mandatory baseline.
3. Load all affected specialist profiles.
4. Load their required knowledge files.
5. Load applicable contracts/workflows.
6. Check architecture boundaries if cross-domain.
7. Check database standards if persistence/schema is affected.
8. Identify applicable stable Rule IDs.
9. Implement using the approved architecture decision model.
10. Add/update tests.
11. Report Rule IDs implemented, tests run, and any `RULE CONFLICT` or `NEEDS_CLARIFICATION`.

## Repository knowledge location

`.agents/` is committed project knowledge. Do not import runtime application code from `.agents/reference-code/`; move/adapt approved implementations into actual `apps/` or `packages/` source locations.

## Mandatory code formatting and naming

All generated or modified application code MUST comply with `.agents/core/05-formatting-naming-standards.md`.
Before considering a coding task complete, run the repository format/lint/typecheck/test commands applicable to the change.
Prettier is the formatting authority. ESLint and repository checks are the naming/code-quality authority.
Do not hand-format code in a style that conflicts with Prettier.
