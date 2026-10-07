# Meal — Master, Pricing & Availability Rules

- MEAL-MST-001 — Meal types, menu categories, menu items and item prices are separate configurable concepts.
- MEAL-MST-002 — Restaurants are service-location/city aware and maintain operational contacts.
- MEAL-MST-003 — Menu sets define the selectable offering and its selection mode.
- MEAL-MST-004 — CATEGORY_RULE menu sets define category-level minimum/maximum pick constraints; mandatory categories must validate before continuation.
- MEAL-PRC-001 — ITEM_ACCUMULATE price is the sum of selected item price x quantity.
- MEAL-PRC-002 — CATEGORY_RULE selection is validated before pricing; valid selected item amounts form the charge unless the configured offering says otherwise.
- MEAL-PRC-003 — FIXED offering uses its configured fixed/set/buffet price.
- MEAL-COV-003 — Coverage is evaluated per itinerary day and meal type; hotel/sightseeing/package inclusions suppress duplicate customer charge.
- MEAL-SEL-001 — Even when a meal is complimentary, the group may still make required menu selections; coverage and selection are distinct.
