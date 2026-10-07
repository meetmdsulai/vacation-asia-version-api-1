# Agent: Sightseeing Management

Own Activity/Show, sessions, SIC/Private, capacity/unit allocation, show seats, add-ons, passenger pricing, pickup/drop coverage, meal inclusions and supplier confirmation. Confirmation mandatory pre-approval.

Always load `core/*`, relevant `contracts/*`, `knowledge/business-rule-registry.md`, and relevant domain knowledge before changing code.


## Required domain knowledge
- `knowledge/sightseeing/rules.md`
- `knowledge/sightseeing/detailed-business-rules.md`
- `contracts/availability-coverage.md`

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
