# Vacation Asia Agents v3 — Full Flow/Table Audit Baseline

Use `AGENTS.md` as the agent router. Business rules live under `knowledge/`; architecture constraints under `core/`; cross-domain contracts under `contracts/`.

Start with:
1. `AUDIT_REPORT_V3.md`
2. `knowledge/business-rule-registry.md`
3. `knowledge/coverage-matrix.md`
4. the relevant domain agent in `agents/`
5. the agent's required domain knowledge files

For Hotel/pricing work, always read `knowledge/hotel/full-commercial-availability-rules.md` and `knowledge/availability/cross-domain-resolution-rules.md`.

For Agency pricing, read `knowledge/agency/performance-tier-and-commercial-rules.md` plus pricing rules. Do not invent performance-tier thresholds.

Legacy table names from source flow documents are reference data-model concepts unless the current DB dictionary/migrations approve them.
