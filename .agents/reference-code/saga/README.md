# Updated Saga Reference
This evolves the uploaded fluent Saga approach without making Saga transport-specific.

Key changes: successful-step-only compensation registration; parallel partial-success tracking; compensation continues after failures; retry/timeout options; Saga/correlation/idempotency context; pluggable SagaStore; explicit durable-ready states.

`InMemorySagaStore` is dev/test only. Production critical workflows should implement `SagaStore` using the owning persistence strategy and recovery worker. Domain actions must be invoked through Ports; local adapters today, gRPC adapters after extraction.
