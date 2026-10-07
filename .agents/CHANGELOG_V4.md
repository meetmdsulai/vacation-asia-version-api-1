# v4 Change Log

## Architecture decisions added
- Hybrid modular monolith persistence decision table.
- CQRS-lite command/query distinction.
- No gRPC between local monolith modules.
- Ports with Local Adapter today / gRPC Adapter after extraction.
- Distributed Edge/API -> gRPC/mTLS -> Domain/Application -> Data topology.
- Edge has no DB access; authoritative business rules remain backend/domain-owned.
- TypeScript application stack standardized.

## Saga code review incorporated
The uploaded `packages.zip` Saga builder/factory design is retained conceptually and upgraded in `reference-code/saga/`.

Corrections:
- compensation eligibility only after successful invocation;
- correct partial success behavior for parallel groups;
- continue compensation after a compensation failure;
- explicit partial-compensation state;
- retry/backoff and timeout policy;
- saga/correlation/idempotency execution context;
- pluggable persistence interface;
- production durability/recovery requirement;
- transport-independent domain Ports.

## Usage boundaries
Saga: cross-domain state-changing workflows.
Prisma CRUD: ordinary masters/configuration.
Prisma transaction: medium transactional use cases.
Query Service/optimized SQL: complex reads such as quotation, booking and itinerary projections.
Outbox/RabbitMQ: durable asynchronous events.
