# Vacation Asia Agent Knowledge Audit — v2

## Certification scope
Audited against:
- supplied Hotel Management flow
- supplied Transport Management flow
- supplied Sightseeing Management flow
- supplied Meals/Restaurant flow
- supplied consolidated business-logic material
- subsequent Product Owner corrections and Q1-Q38/core follow-up answers in this project conversation
- v1 generated agent package

## Audit policy
- Later Product Owner clarification supersedes earlier interpretation.
- Business logic is retained; historical SQL/table/schema suggestions are not treated as authoritative database design.
- Model suggestions are not silently promoted to approved business rules.
- Unknown formulas/details remain `NEEDS_CLARIFICATION`.

## Key corrections/expansions from v1
1. Expanded Transport into detailed airport, multi-city, luggage, route restriction, Standby/Daily, ferry and sightseeing-transfer coverage rules.
2. Preserved the current source rule that Standby is mandatory for groups above 13 pax; kept it distinct from Guide mandatory above 20 pax.
3. Expanded Sightseeing ACTIVITY/SHOW, SIC/Private, unit-capacity, group split, child-price fallback and coverage rules.
4. Expanded Meal coverage, group-level selection, restaurant constraint, ITEM_ACCUMULATE/CATEGORY_RULE/FIXED and dietary-warning behavior.
5. Added traveller/rooming timing and supplier-specific passenger classification rules.
6. Added Hotel supplier confirmation/document handoff rules without making legacy template names architectural constants.
7. Expanded quotation approval, alternative-hotel revision and post-booking amendment rules.
8. Expanded B2C/B2B partial payment, bank/cash verification, agency/distributor credit and receivables rules.
9. Expanded MICE venue/ballroom matching while leaving unapproved detailed event formulas open.
10. Added Fixed/Personalized/Custom package terminology and personalization behavior.
11. Added operational equivalent-substitution rule.
12. Added a stable Rule ID registry and rule-to-agent coverage matrix.
13. Added root `AGENTS.md` routing/precedence instructions for development-agent integration.
14. Marked current screen architecture as DRAFT rather than pretending screens have already been finalized.

## Explicit supersessions preserved
- `Guide`, not `Guarantee`.
- Guide optional at <=20 pax and mandatory at >20 pax, regardless of FIT/Group/MICE label.
- Customer-facing package categories: Fixed, Personalized, Custom. Do not use Dynamic as the current customer-facing category name.
- Full traveller details and rooming are post-initial-payment/booking.
- Meal selection is group-level, superseding earlier per-guest selection examples as the primary business flow.
- Payment gateway architecture/security supersedes any implication that manual receipt entry is the only payment model; bank/cash verification remains supported where approved.

## Certification result
The v2 package contains the currently known core business logic at implementation-useful granularity, with stable traceability. It is a baseline, not a claim that future business discovery is complete. New Product Owner rules must go through `workflows/rule-intake.md` and update the registry/coverage matrix.
