# Source Table / Flow Concept Audit

This document records concepts extracted from the shared flow/table artifacts. It intentionally separates business concepts from legacy/proposed SQL structure.

## Hotel concepts found
Hotel master; contacts; room; room occupancy policy; room inventory; room amenities; hotel/net price; season; hotel-season mapping; supplements; seasonal supplements; rate plans; room/season rate-plan mappings; agency override; check-in policy; cancellation mapping; tax/fee; complimentary meal plan; blackout dates; stop sales; ballroom/amenities; media.

## Transport concepts found
Vehicle type; transport vendor; driver; vehicle; geographic zone; airport/city binding; ferry route; land/multimodal route; pax-to-vehicle rule; transport mode; transport pricing; booking requirement; later operational allocation.

## Sightseeing concepts found
Boat type/vendor/boat; sightseeing master; ACTIVITY configuration; activity items/add-ons; SHOW configuration; session/show time; seat category/capacity; SIC/private pricing; private unit capacity; meal inclusion; contacts; pickup/drop coverage.

## Meal concepts found
Meal type; menu category; menu item and item price; restaurant/city; restaurant contacts; menu set; ITEM_ACCUMULATE; CATEGORY_RULE; category pick rule; FIXED concept; meal-plan coverage; meal-plan item; guest/group selection; validation rules.

## Cross-domain concepts established later
Quotation/version/expiry/approval; booking after minimum 50% verified payment; amendments; cancellation simulation/refunds; traveller details/rooming after payment; Guide; MICE/ballroom matching; Fixed/Personalized/Custom packages; pricing/channel markup; agency credit/receivables; Payment; Supplier Portal; Documents; Operations.

## Implementation warning
Names above explain the source model. Agents must not assume these exact table names/columns are final unless the current DB dictionary/migration explicitly approves them.
