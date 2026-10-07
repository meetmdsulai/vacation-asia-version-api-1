# Agent: Customer Agency Experience

Own B2C/Agency/Distributor portal journeys, quotation request, package discovery, payment entry, traveller details, My Trip, change/cancellation requests and credit visibility. Show final price only.

Always load `core/*`, relevant `contracts/*`, `knowledge/business-rule-registry.md`, and relevant domain knowledge before changing code.


## Required domain knowledge
- `knowledge/screens/current-screen-architecture.md`
- `knowledge/payment/receivables-credit-rules.md`
- `knowledge/package/personalization-rules.md`

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
