# Hotel — Full Commercial & Availability Rules

Status: SOURCE-DERIVED BASELINE. Business behavior is authoritative where confirmed; table names are reference data-model concepts, not mandatory implementation.

## Room & Occupancy
- HOT-OCC-001 — Occupancy policy is room-specific, not globally assumed.
- HOT-OCC-002 — A room policy can distinguish base adults, base children, extra-bed allowance/count, infants, infant limits and age boundaries.
- HOT-OCC-003 — Passenger age classification/pricing is supplier/product specific; never impose a universal child age rule.
- HOT-OCC-004 — Search/quotation must reject or recompose room allocations that violate the selected room's occupancy policy.
- HOT-OCC-005 — Multiple room types and quantities may coexist in one hotel stay.
- HOT-OCC-006 — Post-booking rooming lists allocate actual travellers to booked rooms.

## Inventory / Allocation
- HOT-INV-001 — Hotel inventory is date-sensitive and room-sensitive.
- HOT-INV-002 — Website availability does not eliminate supplier reconfirmation during the current business phase.
- HOT-INV-003 — A quotation may request quantities beyond contracted/allocated inventory; supplier confirmation remains mandatory before quotation approval.
- HOT-INV-004 — Hotel rejection must not silently substitute another hotel; alternative requires customer agreement and quotation revision.

## Stop Sale & Blackout
- HOT-AVL-001 — Stop sale is evaluated before exposing/bookable availability.
- HOT-AVL-002 — Blackout is evaluated before exposing/bookable availability.
- HOT-AVL-003 — Stop-sale/blackout rules may apply at hotel/date level or a narrower room/date scope where configured.
- HOT-AVL-004 — A blocked date is not made sellable merely because inventory exists.

## Net Cost / Date Bands
- HOT-PRC-001 — Hotel supplier/net cost is date-band aware and room aware.
- HOT-PRC-002 — Pricing gaps must be detected; the system must not silently invent a rate for an uncovered date.
- HOT-PRC-003 — Supplier/net cost is internal commercial information and must not leak to B2C/Agency/Distributor clients.

## Seasons
- HOT-SEA-001 — Hotels can be mapped to seasons/date ranges.
- HOT-SEA-002 — Seasons can carry minimum-night requirements.
- HOT-SEA-003 — Hotel-specific seasonal overrides can alter minimum-night behavior.
- HOT-SEA-004 — Overlapping applicable seasons require deterministic priority resolution; the higher-priority applicable rule wins where the configured model uses priority.
- HOT-SEA-005 — Seasonal rules can influence price, supplements and cancellation behavior.

## Supplements
- HOT-SUP-001 — Supplements can be optional or mandatory.
- HOT-SUP-002 — A season can make a normally optional supplement mandatory and may override its price.
- HOT-SUP-003 — Supplements can have charging bases such as per-night/per-service as defined by the product configuration; do not assume one basis globally.

## Rate Plans / Commercial Adjustments
- HOT-RATE-001 — Pricing may resolve through a general rate plan, hotel-specific rate plan and customer/agency-specific override.
- HOT-RATE-002 — Commercial adjustment models may include markup-on-cost, discount-on-sell or fixed/explicit overrides when configured.
- HOT-RATE-003 — Agency-specific override and agency performance tier are separate concepts; do not collapse them.
- HOT-RATE-004 — External users see only their resolved final selling price.

## Tax / Check-in / Cancellation
- HOT-TAX-001 — VAT must support inclusive/exclusive configuration.
- HOT-CIN-001 — Hotel check-in policy may include early/late surcharge tiers.
- HOT-CAN-001 — Cancellation policy may vary by supplier/hotel, room and season.
- HOT-CAN-002 — After booking, hotel amount is treated as non-recoverable for hotel-change amendments under the confirmed current rule; cancellation simulation still displays component-level refundable/non-refundable values.

## Meal Coverage
- HOT-MEAL-001 — Complimentary hotel meals contribute coverage to the Meal Coverage Engine.
- HOT-MEAL-002 — Covered meals must not be charged again as missing meals.

## Current availability/pricing resolution
1. Stop sale
2. Blackout
3. Inventory/required quantity
4. Applicable supplier/net cost/date band
5. Applicable season and priority/min-night rules
6. Rate plan / customer-channel / agency adjustment
7. Mandatory/selected supplements
8. Applicable cancellation policy
9. Tax/VAT presentation and calculation
10. Produce final customer-facing price and snapshot the commercial basis for quotation/booking

The exact persistence implementation may change; this business resolution order must remain explicit and testable.
