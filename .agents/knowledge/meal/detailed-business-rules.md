# Meal Detailed Business Rules
Status: approved unless explicitly marked otherwise.

- MEAL-COV-001 Meal requirements are coverage-driven per itinerary day and meal type. Hotel, Sightseeing and Package inclusions can satisfy coverage; only uncovered meal needs are sold separately.
- MEAL-COV-002 Complimentary/included coverage can still require a menu selection while customer charge remains zero.
- MEAL-GRP-001 Menu selection is made for the entire group to reduce fulfilment mix-ups; do not model independent per-traveller menu orders as the primary booking flow.
- MEAL-GRP-002 A group cannot choose different restaurants for the same meal service.
- MEAL-REST-001 Only restaurants applicable to the booking city/service location should be offered.
- MEAL-CONF-001 Restaurant reservation confirmation is required operationally but may happen after booking.
- MEAL-MODE-001 ITEM_ACCUMULATE supports min/max item selections and total = sum(selected item price x quantity). Current breakfast example is 1..5 items; limits are configuration/data.
- MEAL-MODE-002 CATEGORY_RULE requires all mandatory category min/max rules to be satisfied before proceeding; optional categories may also exist. Total is calculated from valid selected items unless another approved pricing model applies.
- MEAL-MODE-003 FIXED can represent buffet/set offerings with no customer item selection and a fixed price.
- MEAL-PROFILE-001 Traveller dietary/allergy information may filter/warn for vegetarian, vegan, halal and allergen constraints while the operational menu selection remains group-level.
