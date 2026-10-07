# Saga Standard — APPROVED

## Scope
Saga is for multi-step state-changing workflows requiring compensation/recovery. It is valid in both the modular monolith and microservices. Saga is not for read-only queries.

## Transport independence
Saga steps depend on Ports. Local adapters are used in the monolith; gRPC adapters can replace them after extraction. Saga orchestration must not depend directly on gRPC, Prisma, RabbitMQ, or another domain repository.

## Required semantics
- Register/mark a step compensatable only after its invocation succeeds.
- For parallel groups, compensate only the individual steps that actually completed successfully.
- Compensation executes completed steps in reverse completion/order policy.
- A compensation failure must be recorded and compensation must continue for remaining eligible steps.
- Final state distinguishes full compensation from partial/failed compensation.
- Every remotely retried or externally side-effecting operation must support idempotency.
- Steps support timeout and retry/backoff policy where appropriate.
- Saga instances expose correlation ID, saga ID, step status, attempts, timestamps and failure information.
- Persistence is pluggable. Production critical workflows use a durable Saga store/recovery worker; in-memory store is for tests/dev only.
- Saga persistence and business transaction boundaries must be designed with transactional outbox/inbox where reliable cross-process delivery matters.

## States
NEW, IN_PROGRESS, COMPLETED, COMPENSATING, COMPENSATED, FAILED, COMPENSATION_PARTIALLY_FAILED.

## Vacation Asia usage
Use Saga for cross-domain Booking creation, cancellation/refund orchestration, material amendments and other cross-domain workflows. Do not use Saga for CRUD, quotation GET, booking GET, itinerary GET, availability reads or pricing preview reads.
