# Agent: Package Personalization

Own Fixed, Personalized and Custom package composition. Fixed locked; Personalized automatically composes/ranks from budget/pax/preferences; Custom manually assembled. Personalized/Custom component-priced/repriced.

Always load `core/*`, relevant `contracts/*`, `knowledge/business-rule-registry.md`, and relevant domain knowledge before changing code.


## Required domain knowledge
- `knowledge/package/rules.md`
- `knowledge/package/personalization-rules.md`
- `contracts/availability-coverage.md`
- `contracts/pricing-contract.md`
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
