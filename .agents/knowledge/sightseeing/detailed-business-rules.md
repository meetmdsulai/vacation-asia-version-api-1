# Sightseeing Detailed Business Rules
Status: approved unless explicitly marked otherwise.

- SGT-TYPE-001 Core categories are ACTIVITY and SHOW.
- SGT-ACT-001 Activities may have Morning/Afternoon/All-Day sessions, SIC/Private availability, capacity/unit constraints, included and optional subactivities, age restrictions, instructor requirements and meal inclusions.
- SGT-SHOW-001 Shows have fixed show times, seat categories, per-seat pricing and capacity by show/session + seat category. Mixed seat categories for one group may be supported when capacity permits.
- SGT-SIC-001 A product can support SIC only, Private only, or both. Unsupported choices must be hidden. If both are supported, eligible alternatives can be priced and offered.
- SGT-UNIT-001 Private unit quantity = ceil(pax / configured maximum pax per unit); price quantity accordingly. Capacity examples are product data, not universal constants.
- SGT-GRP-001 Travellers in one group may choose different paid activities/add-ons when those activities belong to the same sightseeing place/experience.
- SGT-GRP-002 Do not split one group into unrelated simultaneous sightseeing destinations (e.g. one traveller at Alcazar while another goes to Coral Island in the same itinerary slot).
- SGT-PAX-001 Adult/Child definitions and rates are supplier/product specific; no universal age rule.
- SGT-CHILD-001 If an explicit child sightseeing rate exists, use it. Otherwise apply the adult rate to the child.
- SGT-COV-001 Sightseeing pickup/drop and included meals are coverage sources for Transport and Meal engines and must prevent duplicate customer charges/services.
- SGT-CONF-001 Sightseeing supplier confirmation is mandatory before quotation approval because capacity can be occupied.
