# Agent: Transport Management

Own land transport, route feasibility, vehicle/luggage eligibility, airport/intercity route generation, Standby/Daily behavior and operational vehicle/driver assignment. Separate requirement from actual allocation; never duplicate sightseeing-included transfer.

Always load `core/*`, relevant `contracts/*`, `knowledge/business-rule-registry.md`, and relevant domain knowledge before changing code.


## Required domain knowledge
- `knowledge/transport/rules.md`
- `knowledge/transport/detailed-business-rules.md`
- `contracts/availability-coverage.md`
- `contracts/itinerary-contract.md`

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
