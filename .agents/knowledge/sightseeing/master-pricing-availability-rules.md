# Sightseeing — Master, Pricing & Availability Rules

- SGT-MST-001 — Sightseeing has two core categories: ACTIVITY and SHOW.
- SGT-MST-002 — Activity configuration can include sessions, SIC/private availability, boat requirement/capacity, included and optional activity items, age/instructor rules and meal inclusion.
- SGT-MST-003 — Boat type, boat vendor and individual boat are separate operational/product concepts where boat-based activities require them.
- SGT-MST-004 — Show configuration includes show times, seat categories, capacity and category pricing.
- SGT-AVL-001 — SIC is shown only when the product supports SIC; Private only when supported; if both are supported customer may compare/select.
- SGT-AVL-002 — Private unit quantity = ceil(pax / configured max pax per unit); price multiplies by required units.
- SGT-AVL-003 — Show availability is evaluated by show/session plus seat category capacity; mixed seat categories may be supported.
- SGT-PRC-001 — Activity/show pricing can distinguish adult and child.
- SGT-PRC-002 — If no child-specific sightseeing price exists, use the adult price for the child; never invent a discount.
- SGT-ADD-001 — Optional activity items can have their own duration/session/age/instructor/price constraints and may record passenger participation while the group remains on the same sightseeing destination.
- SGT-GRP-001 — Group members may choose different subactivities at the same sightseeing place, but the booking flow does not split the group into unrelated simultaneous destinations such as Coral Island vs Alcazar Show.
- SGT-COV-001 — Included pickup/drop and included meals publish coverage so Transport/Meal do not duplicate the service.
