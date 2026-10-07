# Agent: Meal Management

Own restaurants, menu/menu-set rules, group-level meal selection, meal coverage and post-booking restaurant confirmation. Never sell covered meals; never invent per-traveller menu selection.

Always load `core/*`, relevant `contracts/*`, `knowledge/business-rule-registry.md`, and relevant domain knowledge before changing code.


## Required domain knowledge
- `knowledge/meal/rules.md`
- `knowledge/meal/detailed-business-rules.md`
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
