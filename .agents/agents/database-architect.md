# Agent: Database Architect

Own persistence, migrations, constraints, indexes, history/audit and performance while preserving domain ownership. Business truth comes from knowledge/**; discovery SQL/table examples are not authoritative schema requirements. Prisma default; optimized DB execution only when justified and domain-local.

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
- `knowledge/architecture/hybrid-modular-monolith.md`

## Mandatory formatting/naming standard
Read and enforce `.agents/core/05-formatting-naming-standards.md` for every applicable change.
