# Vacation Asia Agent Knowledge — v3 Full Flow/Table Audit

## Scope reviewed
- Hotel Management end-to-end flow/table artifact
- Transport Management end-to-end flow/table artifact
- Sightseeing Management end-to-end flow/table artifact
- Meals & Restaurant Management end-to-end flow/table artifact
- Consolidated business-logic material shared in the project
- Subsequent Product Owner corrections and Q1-Q38/follow-up decisions captured in the v2 baseline

## Audit method
1. Extracted domain concepts from every currently available source artifact.
2. Separated business behavior from proposed SQL/table implementation.
3. Compared extracted concepts to v2 rule registry.
4. Added missing detailed rules with stable IDs.
5. Added agent dependencies and cross-domain availability/coverage rules.
6. Rebuilt registry/coverage matrix additions.
7. Checked superseded terminology and known corrections.

## Major v3 expansions
### Hotel
Room-specific occupancy; inventory/allocation; stop-sale and blackout blocking; date-band net cost; price-gap handling; season/min-night/overlap priority; seasonal supplement overrides; rate-plan and agency adjustment resolution; tax/VAT; check-in surcharge; cancellation applicability; complimentary meal coverage; deterministic pricing resolution order.

### Agency / Commercial
Agency performance tier is explicitly distinct from agency override and credit. Channel markup, final-price visibility, manual override audit and percentage/fixed credit are retained. Exact tier thresholds/benefits remain configuration/not invented.

### Transport
Vehicle/vendor/driver masters; geographic zones; airport/city binding; ferry route/schedule; route feasibility; pax+luggage+restriction vehicle eligibility; transport mode/pricing; later operational allocation.

### Sightseeing
ACTIVITY/SHOW; boat resources; sessions; SIC/private; private-unit capacity multiplication; activity add-ons; show-time + seat-category inventory; adult/child fallback; pickup/drop and meal coverage.

### Meals
Meal/menu/category/item/restaurant/menu-set concepts; ITEM_ACCUMULATE/CATEGORY_RULE/FIXED; category min/max validation; coverage per day/meal type; group-level selection; complimentary selection vs zero charge.

## Data-model policy
Legacy/proposed table names are retained as reference concepts only. Agents must use the current approved DB dictionary/migrations for actual schema. Business rules are not discarded merely because the old SQL design changes.

## Known intentionally unresolved items
- Agency performance tier names, thresholds, scoring period and exact commercial benefits.
- TakeIndiaMarket future concept.
- Detailed MICE AV/layout/multi-guide formulas until Product Owner specifies them.
- Any exact table/column definition not present in the currently available source artifacts must not be invented from memory.

## Certification statement
v3 is the most detailed agent baseline produced from the source artifacts currently available in this project. New/changed Product Owner rules must update the rule registry and coverage matrix rather than silently overriding existing rules.
