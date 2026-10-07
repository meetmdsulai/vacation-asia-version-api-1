# Business Rule Registry — v3 Full Flow/Table Audit Baseline

Precedence: Approved Business Rules > Approved ADRs > Domain Contracts > Architecture Standards > Coding Standards > Agent Instructions > Developer Prompt > AI Assumptions.

| Rule ID | Domain Knowledge File | Rule | Status |
|---|---|---|---|
| AMD-001 | `knowledge/quotation/approval-amendment-rules.md` | After booking, customer cannot directly modify itinerary. Customer raises concern/change request; authorized Admin performs permitted amendment. | APPROVED |
| AMD-002 | `knowledge/quotation/approval-amendment-rules.md` | Post-booking Hotel change is restricted under current policy and paid Hotel amount is not recoverable for such a change. | APPROVED |
| AMD-003 | `knowledge/quotation/approval-amendment-rules.md` | Sightseeing, Meal and Transport may be amended only within applicable time/product rules and must be repriced. | APPROVED |
| AMD-004 | `knowledge/quotation/approval-amendment-rules.md` | Amendment preserves original financial history and calculates a delta/additional amount/refund impact rather than destructively rewriting history. | APPROVED |
| AR-001 | `knowledge/payment/receivables-credit-rules.md` | Finance must track outstanding receivables separately from successful payment transactions. | APPROVED |
| CAN-001 | `knowledge/cancellation/detailed-business-rules.md` | Cancellation eligibility is threshold/time/policy driven and can differ by supplier/component. | APPROVED |
| CAN-002 | `knowledge/cancellation/detailed-business-rules.md` | Calculate Hotel, Sightseeing, Transport and Meal cancellation independently using the applicable supplier refund/cancellation configuration. | APPROVED |
| CAN-003 | `knowledge/cancellation/detailed-business-rules.md` | Show the customer a component-level cancellation/refund breakdown before cancellation is committed. | APPROVED |
| CAN-004 | `knowledge/cancellation/detailed-business-rules.md` | Aggregate component results into total cancellation charge and total refundable balance. | APPROVED |
| CAN-005 | `knowledge/cancellation/detailed-business-rules.md` | Hotel is currently non-refundable for the described post-booking hotel-change scenario; general cancellation must still resolve against the applicable approved supplier/business policy. | APPROVED |
| CAN-006 | `knowledge/cancellation/detailed-business-rules.md` | Finance User is authorized to process refunds; refund actions remain auditable and linked to original payment/component/cancellation calculation. | APPROVED |
| CRD-001 | `knowledge/payment/receivables-credit-rules.md` | Credit is available only to credibility-proven/approved agencies/distributors, not universally. | APPROVED |
| CRD-002 | `knowledge/payment/receivables-credit-rules.md` | Credit facility may be percentage-based or fixed monetary amount and must be configurable. | APPROVED |
| HOT-CONF-001 | `knowledge/hotel/operational-confirmation-rules.md` | Admin contacts the designated hotel reservation contact with the structured booking/quotation request; the legacy source names this template EMF01. | APPROVED |
| HOT-CONF-002 | `knowledge/hotel/operational-confirmation-rules.md` | Hotel confirmation captures supplier booking/confirmation number and booked-by/contact information where provided. | APPROVED |
| HOT-CONF-003 | `knowledge/hotel/operational-confirmation-rules.md` | Hotel confirmation is a gate for quotation approval, not merely informational availability. | APPROVED |
| HOT-DOC-001 | `knowledge/hotel/operational-confirmation-rules.md` | After required confirmations and quotation approval, customer receives the appropriate commercial/payment request. Legacy source names invoice EMF03; exact template naming is implementation/content configuration, not a hardcoded domain rule. | APPROVED |
| HOT-DOC-002 | `knowledge/hotel/operational-confirmation-rules.md` | After qualifying payment creates the booking, voucher and itinerary become eligible for generation/delivery. Legacy source names voucher EMF04 and itinerary EMF02. | APPROVED |
| MEAL-CONF-001 | `knowledge/meal/detailed-business-rules.md` | Restaurant reservation confirmation is required operationally but may happen after booking. | APPROVED |
| MEAL-COV-001 | `knowledge/meal/detailed-business-rules.md` | Meal requirements are coverage-driven per itinerary day and meal type. Hotel, Sightseeing and Package inclusions can satisfy coverage; only uncovered meal needs are sold separately. | APPROVED |
| MEAL-COV-002 | `knowledge/meal/detailed-business-rules.md` | Complimentary/included coverage can still require a menu selection while customer charge remains zero. | APPROVED |
| MEAL-GRP-001 | `knowledge/meal/detailed-business-rules.md` | Menu selection is made for the entire group to reduce fulfilment mix-ups; do not model independent per-traveller menu orders as the primary booking flow. | APPROVED |
| MEAL-GRP-002 | `knowledge/meal/detailed-business-rules.md` | A group cannot choose different restaurants for the same meal service. | APPROVED |
| MEAL-MODE-001 | `knowledge/meal/detailed-business-rules.md` | ITEM_ACCUMULATE supports min/max item selections and total = sum(selected item price x quantity). Current breakfast example is 1..5 items; limits are configuration/data. | APPROVED |
| MEAL-MODE-002 | `knowledge/meal/detailed-business-rules.md` | CATEGORY_RULE requires all mandatory category min/max rules to be satisfied before proceeding; optional categories may also exist. Total is calculated from valid selected items unless another approved pricing model applies. | APPROVED |
| MEAL-MODE-003 | `knowledge/meal/detailed-business-rules.md` | FIXED can represent buffet/set offerings with no customer item selection and a fixed price. | APPROVED |
| MEAL-PROFILE-001 | `knowledge/meal/detailed-business-rules.md` | Traveller dietary/allergy information may filter/warn for vegetarian, vegan, halal and allergen constraints while the operational menu selection remains group-level. | APPROVED |
| MEAL-REST-001 | `knowledge/meal/detailed-business-rules.md` | Only restaurants applicable to the booking city/service location should be offered. | APPROVED |
| MICE-001 | `knowledge/mice/detailed-business-rules.md` | MICE is a substantial large-group/event domain, not merely a booking label. | APPROVED |
| MICE-002 | `knowledge/mice/detailed-business-rules.md` | MICE matching considers accommodation plus conference/meeting/ballroom capacity requirements. | APPROVED |
| MICE-003 | `knowledge/mice/detailed-business-rules.md` | A suitable venue may be a hotel with an adequate ballroom or an external event/ballroom venue independent of accommodation. | APPROVED |
| MICE-004 | `knowledge/mice/detailed-business-rules.md` | Guide rule remains pax-based: above 20 pax Guide is mandatory. MICE size can be very large; multiple-guide allocation formula remains NEEDS_CLARIFICATION. | NEEDS_CLARIFICATION |
| MICE-005 | `knowledge/mice/detailed-business-rules.md` | Detailed conference layouts, AV/equipment, catering/gala dinner and event operations are planned capabilities but are not approved detailed rules until separately specified. | APPROVED |
| OPS-SUB-001 | `knowledge/operations/substitution-rules.md` | If an operational supplier cannot fulfil after booking, Operations may source and assign a substitute without involving the customer. | APPROVED |
| OPS-SUB-002 | `knowledge/operations/substitution-rules.md` | Substitute must preserve the confirmed customer-facing service specification/equivalence. Material downgrade or materially different purchased product is an amendment/escalation, not a silent substitution. | APPROVED |
| OPS-SUP-001 | `knowledge/operations/substitution-rules.md` | Phase 1 supplier communication may be email/phone with staff recording confirmation; future Supplier Portal updates the same underlying workflow rather than creating a parallel process. | APPROVED |
| PAY-B2B-001 | `knowledge/payment/receivables-credit-rules.md` | Agency/Distributor also pays at least 50% upfront. Remaining balance may be due after trip completion under approved credit arrangements. | APPROVED |
| PAY-B2C-001 | `knowledge/payment/receivables-credit-rules.md` | B2C can pay the initial amount by supported online payment or bank transfer. Remaining balance can be paid through supported online payment, bank transfer or cash-in-hand operations. | APPROVED |
| PAY-FUT-001 | `knowledge/payment/receivables-credit-rules.md` | `TakeIndiaMarket` is an intentionally unresolved future topic. Never infer or implement requirements from the code word until Product Owner supplies them. | APPROVED |
| PAY-MAN-001 | `knowledge/payment/receivables-credit-rules.md` | Bank transfer and cash require controlled manual verification/recording; they are not gateway-success events. | APPROVED |
| PAY-SCH-001 | `knowledge/payment/receivables-credit-rules.md` | Partial payment is mandatory: an approved quotation becomes a booking only after at least 50% of travel cost is successfully paid/verified. | APPROVED |
| PKG-CUS-001 | `knowledge/package/personalization-rules.md` | Custom Package lets customer/agent manually assemble requirements/components and uses component-driven repricing. | APPROVED |
| PKG-FIX-001 | `knowledge/package/personalization-rules.md` | Fixed Package has predefined dates, places, components and itinerary; customer only enrolls/books it. No component customization. | APPROVED |
| PKG-OPT-001 | `knowledge/package/personalization-rules.md` | Mandatory/optional component semantics apply to Personalized and Custom packages, not Fixed customization. | APPROVED |
| PKG-PER-001 | `knowledge/package/personalization-rules.md` | Personalized Package replaces the former customer-facing term Dynamic Package. | APPROVED |
| PKG-PER-002 | `knowledge/package/personalization-rules.md` | Personalized Package asks for budget, pax and experience/preferences and automatically composes/ranks the best compatible components available under the business rules. | APPROVED |
| PKG-PER-003 | `knowledge/package/personalization-rules.md` | Personalized pricing is component-driven and recalculated when the composition changes. | APPROVED |
| PRC-001 | `knowledge/pricing/detailed-commercial-rules.md` | Fathimah Continental Tours (FCT) is the primary commercial/pricing owner and sets selling logic over supplier rates. | APPROVED |
| PRC-002 | `knowledge/pricing/detailed-commercial-rules.md` | Discussed markup examples are Agency +14%, B2C +20%, Distributor +12% from supplier rate. These are configurable examples/data, never hardcoded universal constants. | APPROVED |
| PRC-003 | `knowledge/pricing/detailed-commercial-rules.md` | VAT is part of pricing and must support inclusive or exclusive treatment by configuration. | APPROVED |
| PRC-004 | `knowledge/pricing/detailed-commercial-rules.md` | Agency/Distributor/B2C sees only authorized final selling price; internal supplier/net cost and markup must not leak through external APIs/UI. | APPROVED |
| PRC-005 | `knowledge/pricing/detailed-commercial-rules.md` | Sales/Admin can override calculated selling price. Preserve original calculated price, adjustment, reason, actor/time and final price for audit. | APPROVED |
| QTN-001 | `knowledge/quotation/approval-amendment-rules.md` | Customer-created quotation enters review, not booking. | APPROVED |
| QTN-002 | `knowledge/quotation/approval-amendment-rules.md` | Hotel confirmation is a primary approval criterion even when allocated inventory is displayed, because requested quantity may exceed allocation or supplier may decline. | APPROVED |
| QTN-003 | `knowledge/quotation/approval-amendment-rules.md` | Sightseeing confirmation is also required before approval because capacity may be occupied. | APPROVED |
| QTN-004 | `knowledge/quotation/approval-amendment-rules.md` | Transport and Meal confirmation do not block quotation approval; they are arranged operationally later. | APPROVED |
| QTN-005 | `knowledge/quotation/approval-amendment-rules.md` | Once Hotel + Sightseeing mandatory confirmations are satisfied, Admin can approve quotation and request >=50% initial payment. | APPROVED |
| QTN-006 | `knowledge/quotation/approval-amendment-rules.md` | Successful/verified >=50% payment converts the approved quotation into a booking. | APPROVED |
| QTN-007 | `knowledge/quotation/approval-amendment-rules.md` | Quotation can be revised multiple times; preserve version history. Default expiry is 3 days, configurable. | APPROVED |
| QTN-008 | `knowledge/quotation/approval-amendment-rules.md` | If requested Hotel rejects, Admin cannot silently replace it. Admin may suggest an alternative to customer; customer agreement leads to quotation revision and new confirmation. | APPROVED |
| SGT-ACT-001 | `knowledge/sightseeing/detailed-business-rules.md` | Activities may have Morning/Afternoon/All-Day sessions, SIC/Private availability, capacity/unit constraints, included and optional subactivities, age restrictions, instructor requirements and meal inclusions. | APPROVED |
| SGT-CHILD-001 | `knowledge/sightseeing/detailed-business-rules.md` | If an explicit child sightseeing rate exists, use it. Otherwise apply the adult rate to the child. | APPROVED |
| SGT-CONF-001 | `knowledge/sightseeing/detailed-business-rules.md` | Sightseeing supplier confirmation is mandatory before quotation approval because capacity can be occupied. | APPROVED |
| SGT-COV-001 | `knowledge/sightseeing/detailed-business-rules.md` | Sightseeing pickup/drop and included meals are coverage sources for Transport and Meal engines and must prevent duplicate customer charges/services. | APPROVED |
| SGT-GRP-001 | `knowledge/sightseeing/detailed-business-rules.md` | Travellers in one group may choose different paid activities/add-ons when those activities belong to the same sightseeing place/experience. | APPROVED |
| SGT-GRP-002 | `knowledge/sightseeing/detailed-business-rules.md` | Do not split one group into unrelated simultaneous sightseeing destinations (e.g. one traveller at Alcazar while another goes to Coral Island in the same itinerary slot). | APPROVED |
| SGT-PAX-001 | `knowledge/sightseeing/detailed-business-rules.md` | Adult/Child definitions and rates are supplier/product specific; no universal age rule. | APPROVED |
| SGT-SHOW-001 | `knowledge/sightseeing/detailed-business-rules.md` | Shows have fixed show times, seat categories, per-seat pricing and capacity by show/session + seat category. Mixed seat categories for one group may be supported when capacity permits. | APPROVED |
| SGT-SIC-001 | `knowledge/sightseeing/detailed-business-rules.md` | A product can support SIC only, Private only, or both. Unsupported choices must be hidden. If both are supported, eligible alternatives can be priced and offered. | APPROVED |
| SGT-TYPE-001 | `knowledge/sightseeing/detailed-business-rules.md` | Core categories are ACTIVITY and SHOW. | APPROVED |
| SGT-UNIT-001 | `knowledge/sightseeing/detailed-business-rules.md` | Private unit quantity = ceil(pax / configured maximum pax per unit); price quantity accordingly. Capacity examples are product data, not universal constants. | APPROVED |
| TRN-AIR-001 | `knowledge/transport/detailed-business-rules.md` | Airport Pickup/Drop creates arrival Airport -> Hotel and departure Hotel -> Airport itinerary legs; customer may review/remove applicable generated legs. | APPROVED |
| TRN-ALLOC-001 | `knowledge/transport/detailed-business-rules.md` | Customer chooses an eligible transport preference/requirement. Actual vendor, driver, vehicle, vehicle type/registration allocation is operational and may occur later. | APPROVED |
| TRN-COST-001 | `knowledge/transport/detailed-business-rules.md` | Standard quoted transport price already includes the normal operating costs agreed by the business; do not independently double-charge fuel/tolls/parking/driver unless a future approved rule changes this. | APPROVED |
| TRN-COV-001 | `knowledge/transport/detailed-business-rules.md` | Sightseeing-included pickup/drop covers those itinerary segments and must not be duplicated as paid transport. | APPROVED |
| TRN-COV-002 | `knowledge/transport/detailed-business-rules.md` | With Airport Pickup/Drop-only transport, sightseeing transport not included by the sightseeing supplier must be offered/added at additional cost. | APPROVED |
| TRN-COV-003 | `knowledge/transport/detailed-business-rules.md` | With Standby, sightseeing movement is covered by the standby service when it falls within that service scope. | APPROVED |
| TRN-COV-004 | `knowledge/transport/detailed-business-rules.md` | With Daily Basis, the customer may choose to use the daily vehicle for sightseeing where compatible. | APPROVED |
| TRN-DAY-001 | `knowledge/transport/detailed-business-rules.md` | Daily Basis has a standard 10-hour service duration. Extra hours are chargeable using Admin-configured data/rates. | APPROVED |
| TRN-FERRY-001 | `knowledge/transport/detailed-business-rules.md` | Ferry is a sellable transport service, not only validation data. Ferry supports SIC and Private and uses predefined schedules. | APPROVED |
| TRN-FERRY-002 | `knowledge/transport/detailed-business-rules.md` | Ferry schedule, travel time and required arrival buffer must be validated; infeasible connections are blocked rather than merely warned. | APPROVED |
| TRN-LEAD-001 | `knowledge/transport/detailed-business-rules.md` | Transport confirmation/allocation is driven by a globally configurable lead-time before service. | APPROVED |
| TRN-LUG-001 | `knowledge/transport/detailed-business-rules.md` | Luggage can invalidate a passenger-capacity-valid vehicle choice and require a larger/multiple vehicle combination. | APPROVED |
| TRN-MODE-001 | `knowledge/transport/detailed-business-rules.md` | Supported customer requirement modes include Airport Pickup/Drop, Standby, Daily/Day-to-Day and Sightseeing-related transport. | APPROVED |
| TRN-MULTI-001 | `knowledge/transport/detailed-business-rules.md` | Multi-city itineraries must ask/know whether intercity movement is by flight; where applicable generate city airport -> hotel and hotel -> city airport legs for each relevant city. | APPROVED |
| TRN-REQ-001 | `knowledge/transport/detailed-business-rules.md` | Custom Package transport intake captures arrival/departure airport, dates and times. Timing participates in ferry feasibility. | APPROVED |
| TRN-ROUTE-001 | `knowledge/transport/detailed-business-rules.md` | Area/route restrictions can override the normal pax vehicle recommendation. Chaweng is the known business example where Coach access may be prohibited and suitable Vans used instead. Implement via durable area/route restriction data, not hotel-name keyword logic. | APPROVED |
| TRN-STBY-001 | `knowledge/transport/detailed-business-rules.md` | The Daily Basis 10-hour calculation does not apply to Standby. Standby may cover the full trip or selected days. | APPROVED |
| TRN-STBY-002 | `knowledge/transport/detailed-business-rules.md` | Current supplied business logic states Standby is mandatory for groups above 13 pax. Preserve as an approved current rule until Product Owner changes the threshold; do not confuse this with the separate Guide >20 rule. | APPROVED |
| TRN-VEH-001 | `knowledge/transport/detailed-business-rules.md` | Vehicle eligibility is rule-driven by pax, luggage/comfort, route restrictions and customer preference. Current examples: 2-3 Car; 4-9 one Van; 9-11 may allow Van/Car/multiple-Van combinations subject to luggage/comfort; 12-14 two Vans; larger groups may use Coach. Do not hardcode examples as universal constants. | APPROVED |
| TRV-001 | `knowledge/booking/traveller-rooming-rules.md` | Passenger types/age boundaries are supplier/product specific; rates resolve against supplier definitions. | APPROVED |
| TRV-002 | `knowledge/booking/traveller-rooming-rules.md` | Quotation can begin with counts/ages needed for pricing; full traveller details are collected after the initial payment creates the booking. | APPROVED |
| TRV-003 | `knowledge/booking/traveller-rooming-rules.md` | One booking may contain multiple hotels, multiple stays in one city and multiple room types in one hotel. | APPROVED |
| TRV-004 | `knowledge/booking/traveller-rooming-rules.md` | Group rooming lists are supported and allocated after payment/booking. | APPROVED |
| TRV-005 | `knowledge/booking/traveller-rooming-rules.md` | Guide is optional for 20 pax or fewer and may be requested even for small FIT; Guide is mandatory above 20 pax regardless of FIT/Group/MICE label. | APPROVED |


## v3 additions from full flow/table audit

| Rule ID | Domain Knowledge File | Rule | Status |
|---|---|---|---|
| AGY-CRD-001 | `knowledge/agency/performance-tier-and-commercial-rules.md` | Credit is available only to approved/credible agencies/distributors. | APPROVED |
| AGY-CRD-002 | `knowledge/agency/performance-tier-and-commercial-rules.md` | Credit facility may be percentage-based or fixed monetary amount. | APPROVED |
| AGY-CRD-003 | `knowledge/agency/performance-tier-and-commercial-rules.md` | Credit eligibility, facility, utilization, available balance and terms are distinct from markup/tier. | APPROVED |
| AGY-CRD-004 | `knowledge/agency/performance-tier-and-commercial-rules.md` | Agency/Distributor pays at least 50% upfront for booking; remaining amount can become post-trip receivable subject to approved credit terms. | APPROVED |
| AGY-CRD-005 | `knowledge/agency/performance-tier-and-commercial-rules.md` | Receivables/collections are Finance responsibilities and must not rewrite original booking/payment history. | APPROVED |
| AGY-PRC-001 | `knowledge/agency/performance-tier-and-commercial-rules.md` | Fathimah Continental Tours controls selling-price commercial configuration over supplier rates. | APPROVED |
| AGY-PRC-002 | `knowledge/agency/performance-tier-and-commercial-rules.md` | Channel pricing can differ for Agency, Distributor and B2C Customer. | APPROVED |
| AGY-PRC-003 | `knowledge/agency/performance-tier-and-commercial-rules.md` | Current examples (14% Agency, 12% Distributor, 20% B2C) are configurable values, not source-code constants. | APPROVED |
| AGY-PRC-004 | `knowledge/agency/performance-tier-and-commercial-rules.md` | Agency/Distributor sees final resolved sell price, not supplier cost/internal margin. | APPROVED |
| AGY-PRC-005 | `knowledge/agency/performance-tier-and-commercial-rules.md` | Sales/Admin may override calculated sell price; retain calculated price, adjustment, reason, actor, timestamp and final price separately. | APPROVED |
| AGY-TIER-001 | `knowledge/agency/performance-tier-and-commercial-rules.md` | Agency performance tier is a commercial classification concept distinct from one-off agency price override. | APPROVED |
| AGY-TIER-002 | `knowledge/agency/performance-tier-and-commercial-rules.md` | Tier assignment may influence commercial treatment only through explicit configured rules; agents must not invent tier names, thresholds or benefits. | NEEDS BUSINESS CONFIGURATION |
| AGY-TIER-003 | `knowledge/agency/performance-tier-and-commercial-rules.md` | Performance-tier changes must be auditable/effective-dated if used for pricing so historical quotations/bookings remain reproducible. | APPROVED |
| AVL-001 | `knowledge/availability/cross-domain-resolution-rules.md` | Availability is domain-owned. Package/Personalization queries domain contracts; it does not manipulate another domain's tables. | APPROVED |
| AVL-002 | `knowledge/availability/cross-domain-resolution-rules.md` | A product shown as available can still require supplier confirmation according to business phase/rules. | APPROVED |
| AVL-003 | `knowledge/availability/cross-domain-resolution-rules.md` | Hotel and Sightseeing supplier confirmation are mandatory gates for quotation approval. | APPROVED |
| AVL-004 | `knowledge/availability/cross-domain-resolution-rules.md` | Transport and Meal confirmation are deferred to post-booking operations. | APPROVED |
| AVL-005 | `knowledge/availability/cross-domain-resolution-rules.md` | Coverage must be evaluated before adding duplicate services. | APPROVED |
| AVL-006 | `knowledge/availability/cross-domain-resolution-rules.md` | Sightseeing-included pickup/drop prevents duplicate Transport charging/allocation for the covered route. | APPROVED |
| AVL-007 | `knowledge/availability/cross-domain-resolution-rules.md` | Standby transport can cover sightseeing transport requirements; Daily Basis presents a choice to use the daily vehicle where applicable. | APPROVED |
| AVL-008 | `knowledge/availability/cross-domain-resolution-rules.md` | Complimentary hotel/sightseeing meals satisfy Meal Coverage for the relevant day/meal type. | APPROVED |
| AVL-009 | `knowledge/availability/cross-domain-resolution-rules.md` | Route feasibility includes timing, vehicle restrictions and multimodal/ferry transitions. | APPROVED |
| AVL-010 | `knowledge/availability/cross-domain-resolution-rules.md` | Final availability used for approval/booking must be snapshot/auditable enough to explain the decision later. | APPROVED |
| HOT-AVL-001 | `knowledge/hotel/full-commercial-availability-rules.md` | Stop sale is evaluated before exposing/bookable availability. | APPROVED |
| HOT-AVL-002 | `knowledge/hotel/full-commercial-availability-rules.md` | Blackout is evaluated before exposing/bookable availability. | APPROVED |
| HOT-AVL-003 | `knowledge/hotel/full-commercial-availability-rules.md` | Stop-sale/blackout rules may apply at hotel/date level or a narrower room/date scope where configured. | APPROVED |
| HOT-AVL-004 | `knowledge/hotel/full-commercial-availability-rules.md` | A blocked date is not made sellable merely because inventory exists. | APPROVED |
| HOT-CAN-001 | `knowledge/hotel/full-commercial-availability-rules.md` | Cancellation policy may vary by supplier/hotel, room and season. | APPROVED |
| HOT-CAN-002 | `knowledge/hotel/full-commercial-availability-rules.md` | After booking, hotel amount is treated as non-recoverable for hotel-change amendments under the confirmed current rule; cancellation simulation still displays component-level refundable/non-refundable values. | APPROVED |
| HOT-CIN-001 | `knowledge/hotel/full-commercial-availability-rules.md` | Hotel check-in policy may include early/late surcharge tiers. | APPROVED |
| HOT-INV-001 | `knowledge/hotel/full-commercial-availability-rules.md` | Hotel inventory is date-sensitive and room-sensitive. | APPROVED |
| HOT-INV-002 | `knowledge/hotel/full-commercial-availability-rules.md` | Website availability does not eliminate supplier reconfirmation during the current business phase. | APPROVED |
| HOT-INV-003 | `knowledge/hotel/full-commercial-availability-rules.md` | A quotation may request quantities beyond contracted/allocated inventory; supplier confirmation remains mandatory before quotation approval. | APPROVED |
| HOT-INV-004 | `knowledge/hotel/full-commercial-availability-rules.md` | Hotel rejection must not silently substitute another hotel; alternative requires customer agreement and quotation revision. | APPROVED |
| HOT-MEAL-001 | `knowledge/hotel/full-commercial-availability-rules.md` | Complimentary hotel meals contribute coverage to the Meal Coverage Engine. | APPROVED |
| HOT-MEAL-002 | `knowledge/hotel/full-commercial-availability-rules.md` | Covered meals must not be charged again as missing meals. | APPROVED |
| HOT-OCC-001 | `knowledge/hotel/full-commercial-availability-rules.md` | Occupancy policy is room-specific, not globally assumed. | APPROVED |
| HOT-OCC-002 | `knowledge/hotel/full-commercial-availability-rules.md` | A room policy can distinguish base adults, base children, extra-bed allowance/count, infants, infant limits and age boundaries. | APPROVED |
| HOT-OCC-003 | `knowledge/hotel/full-commercial-availability-rules.md` | Passenger age classification/pricing is supplier/product specific; never impose a universal child age rule. | APPROVED |
| HOT-OCC-004 | `knowledge/hotel/full-commercial-availability-rules.md` | Search/quotation must reject or recompose room allocations that violate the selected room's occupancy policy. | APPROVED |
| HOT-OCC-005 | `knowledge/hotel/full-commercial-availability-rules.md` | Multiple room types and quantities may coexist in one hotel stay. | APPROVED |
| HOT-OCC-006 | `knowledge/hotel/full-commercial-availability-rules.md` | Post-booking rooming lists allocate actual travellers to booked rooms. | APPROVED |
| HOT-PRC-001 | `knowledge/hotel/full-commercial-availability-rules.md` | Hotel supplier/net cost is date-band aware and room aware. | APPROVED |
| HOT-PRC-002 | `knowledge/hotel/full-commercial-availability-rules.md` | Pricing gaps must be detected; the system must not silently invent a rate for an uncovered date. | APPROVED |
| HOT-PRC-003 | `knowledge/hotel/full-commercial-availability-rules.md` | Supplier/net cost is internal commercial information and must not leak to B2C/Agency/Distributor clients. | APPROVED |
| HOT-RATE-001 | `knowledge/hotel/full-commercial-availability-rules.md` | Pricing may resolve through a general rate plan, hotel-specific rate plan and customer/agency-specific override. | APPROVED |
| HOT-RATE-002 | `knowledge/hotel/full-commercial-availability-rules.md` | Commercial adjustment models may include markup-on-cost, discount-on-sell or fixed/explicit overrides when configured. | APPROVED |
| HOT-RATE-003 | `knowledge/hotel/full-commercial-availability-rules.md` | Agency-specific override and agency performance tier are separate concepts; do not collapse them. | APPROVED |
| HOT-RATE-004 | `knowledge/hotel/full-commercial-availability-rules.md` | External users see only their resolved final selling price. | APPROVED |
| HOT-SEA-001 | `knowledge/hotel/full-commercial-availability-rules.md` | Hotels can be mapped to seasons/date ranges. | APPROVED |
| HOT-SEA-002 | `knowledge/hotel/full-commercial-availability-rules.md` | Seasons can carry minimum-night requirements. | APPROVED |
| HOT-SEA-003 | `knowledge/hotel/full-commercial-availability-rules.md` | Hotel-specific seasonal overrides can alter minimum-night behavior. | APPROVED |
| HOT-SEA-004 | `knowledge/hotel/full-commercial-availability-rules.md` | Overlapping applicable seasons require deterministic priority resolution; the higher-priority applicable rule wins where the configured model uses priority. | APPROVED |
| HOT-SEA-005 | `knowledge/hotel/full-commercial-availability-rules.md` | Seasonal rules can influence price, supplements and cancellation behavior. | APPROVED |
| HOT-SUP-001 | `knowledge/hotel/full-commercial-availability-rules.md` | Supplements can be optional or mandatory. | APPROVED |
| HOT-SUP-002 | `knowledge/hotel/full-commercial-availability-rules.md` | A season can make a normally optional supplement mandatory and may override its price. | APPROVED |
| HOT-SUP-003 | `knowledge/hotel/full-commercial-availability-rules.md` | Supplements can have charging bases such as per-night/per-service as defined by the product configuration; do not assume one basis globally. | APPROVED |
| HOT-TAX-001 | `knowledge/hotel/full-commercial-availability-rules.md` | VAT must support inclusive/exclusive configuration. | APPROVED |
| MEAL-COV-003 | `knowledge/meal/master-pricing-availability-rules.md` | Coverage is evaluated per itinerary day and meal type; hotel/sightseeing/package inclusions suppress duplicate customer charge. | APPROVED |
| MEAL-MST-001 | `knowledge/meal/master-pricing-availability-rules.md` | Meal types, menu categories, menu items and item prices are separate configurable concepts. | APPROVED |
| MEAL-MST-002 | `knowledge/meal/master-pricing-availability-rules.md` | Restaurants are service-location/city aware and maintain operational contacts. | APPROVED |
| MEAL-MST-003 | `knowledge/meal/master-pricing-availability-rules.md` | Menu sets define the selectable offering and its selection mode. | APPROVED |
| MEAL-MST-004 | `knowledge/meal/master-pricing-availability-rules.md` | CATEGORY_RULE menu sets define category-level minimum/maximum pick constraints; mandatory categories must validate before continuation. | APPROVED |
| MEAL-PRC-001 | `knowledge/meal/master-pricing-availability-rules.md` | ITEM_ACCUMULATE price is the sum of selected item price x quantity. | APPROVED |
| MEAL-PRC-002 | `knowledge/meal/master-pricing-availability-rules.md` | CATEGORY_RULE selection is validated before pricing; valid selected item amounts form the charge unless the configured offering says otherwise. | APPROVED |
| MEAL-PRC-003 | `knowledge/meal/master-pricing-availability-rules.md` | FIXED offering uses its configured fixed/set/buffet price. | APPROVED |
| MEAL-SEL-001 | `knowledge/meal/master-pricing-availability-rules.md` | Even when a meal is complimentary, the group may still make required menu selections; coverage and selection are distinct. | APPROVED |
| SGT-ADD-001 | `knowledge/sightseeing/master-pricing-availability-rules.md` | Optional activity items can have their own duration/session/age/instructor/price constraints and may record passenger participation while the group remains on the same sightseeing destination. | APPROVED |
| SGT-AVL-001 | `knowledge/sightseeing/master-pricing-availability-rules.md` | SIC is shown only when the product supports SIC; Private only when supported; if both are supported customer may compare/select. | APPROVED |
| SGT-AVL-002 | `knowledge/sightseeing/master-pricing-availability-rules.md` | Private unit quantity = ceil(pax / configured max pax per unit); price multiplies by required units. | APPROVED |
| SGT-AVL-003 | `knowledge/sightseeing/master-pricing-availability-rules.md` | Show availability is evaluated by show/session plus seat category capacity; mixed seat categories may be supported. | APPROVED |
| SGT-MST-001 | `knowledge/sightseeing/master-pricing-availability-rules.md` | Sightseeing has two core categories: ACTIVITY and SHOW. | APPROVED |
| SGT-MST-002 | `knowledge/sightseeing/master-pricing-availability-rules.md` | Activity configuration can include sessions, SIC/private availability, boat requirement/capacity, included and optional activity items, age/instructor rules and meal inclusion. | APPROVED |
| SGT-MST-003 | `knowledge/sightseeing/master-pricing-availability-rules.md` | Boat type, boat vendor and individual boat are separate operational/product concepts where boat-based activities require them. | APPROVED |
| SGT-MST-004 | `knowledge/sightseeing/master-pricing-availability-rules.md` | Show configuration includes show times, seat categories, capacity and category pricing. | APPROVED |
| SGT-PRC-001 | `knowledge/sightseeing/master-pricing-availability-rules.md` | Activity/show pricing can distinguish adult and child. | APPROVED |
| SGT-PRC-002 | `knowledge/sightseeing/master-pricing-availability-rules.md` | If no child-specific sightseeing price exists, use the adult price for the child; never invent a discount. | APPROVED |
| TRN-AVL-001 | `knowledge/transport/master-pricing-availability-rules.md` | Actual vehicle/driver/vendor availability is an operational concern and can be assigned later than quotation/booking requirement selection. | APPROVED |
| TRN-MST-001 | `knowledge/transport/master-pricing-availability-rules.md` | Maintain vehicle-type capability separately from actual vendor vehicles. | APPROVED |
| TRN-MST-002 | `knowledge/transport/master-pricing-availability-rules.md` | Maintain transport vendors, drivers and physical vehicles for later operational allocation. | APPROVED |
| TRN-MST-003 | `knowledge/transport/master-pricing-availability-rules.md` | Geographic zones/areas support routing, eligibility and restrictions; do not depend on hotel-name keyword matching. | APPROVED |
| TRN-MST-004 | `knowledge/transport/master-pricing-availability-rules.md` | Airports are associated with service cities/areas for automatic itinerary-leg generation. | APPROVED |
| TRN-MST-005 | `knowledge/transport/master-pricing-availability-rules.md` | Ferry routes/schedules are first-class transport configuration. | APPROVED |
| TRN-MST-006 | `knowledge/transport/master-pricing-availability-rules.md` | Routes can represent land or multimodal movements and participate in feasibility. | APPROVED |
| TRN-PRC-001 | `knowledge/transport/master-pricing-availability-rules.md` | Transport pricing is driven by configured service/mode/route/vehicle rules; do not invent pricing from vehicle master data. | APPROVED |
| TRN-PRC-002 | `knowledge/transport/master-pricing-availability-rules.md` | Daily-basis overtime is a configured extra-hour charge after the standard service duration. | APPROVED |
| TRN-RULE-001 | `knowledge/transport/master-pricing-availability-rules.md` | Pax-to-vehicle rules produce eligible/recommended combinations, then luggage/route restrictions can narrow/override them. | APPROVED |

## Architecture / Engineering Decisions — v4
| Rule ID | Domain | Description | Status |
|---|---|---|---|
| ARCH-HYB-001 | Architecture | Modular monolith uses Prisma for normal CRUD and does not introduce gRPC between local modules. | APPROVED BUSINESS/ARCHITECTURE RULE |
| ARCH-HYB-002 | Architecture | Medium transactional writes use application/domain services with Prisma transactions. | APPROVED BUSINESS/ARCHITECTURE RULE |
| ARCH-HYB-003 | Architecture | Complex reads such as itinerary/quotation retrieval use Query Services and optimized persistence paths where justified; they are not Sagas. | APPROVED BUSINESS/ARCHITECTURE RULE |
| ARCH-HYB-004 | Architecture | Cross-domain state-changing workflows use Saga orchestration through domain Ports. | APPROVED BUSINESS/ARCHITECTURE RULE |
| ARCH-HYB-005 | Architecture | Monolith Ports use local adapters; extracted services may replace them with gRPC adapters without changing caller business logic. | APPROVED BUSINESS/ARCHITECTURE RULE |
| ARCH-HYB-006 | Architecture | gRPC contracts express business capabilities, not remote DAL/table operations. | APPROVED BUSINESS/ARCHITECTURE RULE |
| ARCH-HYB-007 | Architecture | Durable async events use transactional outbox and RabbitMQ; Redis remains optimization only. | APPROVED BUSINESS/ARCHITECTURE RULE |
| ARCH-HYB-008 | Architecture | Application code is TypeScript across APIs, domain services, workers, adapters, orchestration and tests. | APPROVED BUSINESS/ARCHITECTURE RULE |
| SAGA-STD-001 | Saga | A step becomes eligible for compensation only after successful invocation. | APPROVED BUSINESS/ARCHITECTURE RULE |
| SAGA-STD-002 | Saga | Parallel groups compensate only individually successful steps. | APPROVED BUSINESS/ARCHITECTURE RULE |
| SAGA-STD-003 | Saga | Compensation continues after individual compensation failures and records partial failure. | APPROVED BUSINESS/ARCHITECTURE RULE |
| SAGA-STD-004 | Saga | Saga actions requiring retries/external side effects must be idempotent and carry correlation/idempotency context. | APPROVED BUSINESS/ARCHITECTURE RULE |
| SAGA-STD-005 | Saga | Production-critical Sagas require pluggable durable state/recovery; in-memory state is test/dev only. | APPROVED BUSINESS/ARCHITECTURE RULE |
| SAGA-STD-006 | Saga | Saga implementation is transport-independent; domain Ports hide local/gRPC/event adapters. | APPROVED BUSINESS/ARCHITECTURE RULE |

## Engineering Formatting and Naming
- ENG-FMT-001 — Prettier is the repository-wide formatting authority; generated/modified code must pass the repository Prettier check.
- ENG-FMT-002 — TypeScript functions, methods, variables, parameters and ordinary source file names use camelCase; type-like declarations use PascalCase.
- ENG-FMT-003 — Application/source folder names use snake_case except required ecosystem/tooling exceptions.
- ENG-FMT-004 — Physical PostgreSQL schemas, tables, columns and database identifiers use snake_case.
- ENG-FMT-005 — Prisma maps idiomatic TypeScript names to physical snake_case PostgreSQL identifiers with `@map`/`@@map` where required.
- ENG-FMT-006 — ESLint/repository checks enforce naming; Prettier is not treated as an identifier-naming validator.
