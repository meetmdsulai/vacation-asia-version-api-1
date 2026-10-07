# Agent: Pricing Commercial

Own supplier-cost-to-sell calculation, channel markups, VAT, overrides and pricing snapshots. Never expose supplier cost/internal markup externally; examples are config, not constants.

Always load `core/*`, relevant `contracts/*`, `knowledge/business-rule-registry.md`, and relevant domain knowledge before changing code.


## Required domain knowledge
- `knowledge/pricing/rules.md`
- `knowledge/pricing/detailed-commercial-rules.md`
- `contracts/pricing-contract.md`

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
