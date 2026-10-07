# Hybrid Modular Monolith Architecture — APPROVED

## Decision
Vacation Asia starts as a TypeScript modular monolith with microservice-ready domain boundaries. Do not introduce network calls merely to simulate future microservices.

## Persistence paths
1. Normal CRUD: NestJS application service -> repository -> Prisma ORM -> PostgreSQL.
2. Medium transactional logic: application/domain service -> Prisma `$transaction`.
3. Complex reads: dedicated Query Service -> Prisma/TypedSQL/parameterized SQL/view/materialized view/DB function when justified.
4. Complex single-domain writes: domain service -> Prisma transaction or domain-owned DB function/SP only when atomic DB-side execution measurably helps.
5. Cross-domain state-changing workflows: Saga Orchestrator -> domain Ports -> local adapters today.
6. Durable asynchronous side effects/events: transactional outbox -> RabbitMQ consumers.
7. Redis is optimization/cache only; PostgreSQL remains source of truth.

## CQRS-lite
Commands mutate state: create, revise, approve, confirm, cancel, allocate, book, refund.
Queries read state: get, search, list, dashboards, quotation view, itinerary, availability, pricing preview.
Do not use Saga for read-only itinerary/quotation fetching. Use optimized Query Services/read models.

## Local vs remote communication
Business modules depend on TypeScript Ports, never another module's repository.

Monolith: Port -> Local Adapter -> target Application Service.
Microservice: same Port -> gRPC Adapter -> remote Application Service.

The calling use case/Saga must not know whether the adapter is local or remote.

## gRPC rule
Use gRPC when a capability is physically separated or when an intentional deployment/security boundary requires it. Contracts express business capabilities (CheckAvailability, ConfirmHotel, CreateBooking), not remote DAL/table operations.

## Database ownership
Only owning domain repositories/query services access that domain's schema. No cross-domain repository/table manipulation. Optimized SQL/functions remain domain-owned.

## TypeScript
All application code, domain code, APIs, workers, adapters, Saga orchestration and tests use TypeScript. `.proto`, SQL/PLpgSQL and infrastructure configuration are supporting languages, not application-language exceptions.
