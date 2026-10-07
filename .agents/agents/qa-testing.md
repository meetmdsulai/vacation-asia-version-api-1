# Agent: Qa Testing

Own test strategy/business-rule verification. Reference rule IDs. Prioritize lifecycle gates, pricing/coverage, cancellation simulation, amendments, payment/refund idempotency, confirmations and thresholds; test Saga failure/compensation.

Always load `core/*`, relevant `contracts/*`, `knowledge/business-rule-registry.md`, and relevant domain knowledge before changing code.

## v3 required detailed knowledge
Before changing related behavior, also read the applicable files under:
- `knowledge/hotel/full-commercial-availability-rules.md`
- `knowledge/agency/performance-tier-and-commercial-rules.md`
- `knowledge/availability/cross-domain-resolution-rules.md`
- `knowledge/transport/master-pricing-availability-rules.md`
- `knowledge/sightseeing/master-pricing-availability-rules.md`
- `knowledge/meal/master-pricing-availability-rules.md`
- `knowledge/source-analysis/table-concept-audit.md`
Read only the domain-relevant subset, but never implement a pricing/availability change without checking cross-domain resolution rules.


## v4 mandatory architecture knowledge
- `knowledge/saga/saga-standard.md`

## Mandatory formatting/naming standard
Read and enforce `.agents/core/05-formatting-naming-standards.md` for every applicable change.
