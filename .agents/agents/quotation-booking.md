# Agent: Quotation Booking

Own quotation/revisions, approval readiness, booking creation, change requests, amendments, cancellation initiation and Booking Workspace orchestration. Never approve before Hotel+Sightseeing confirmation; never create booking before >=50% payment verification.

Always load `core/*`, relevant `contracts/*`, `knowledge/business-rule-registry.md`, and relevant domain knowledge before changing code.


## Required domain knowledge
- `knowledge/quotation/rules.md`
- `knowledge/quotation/approval-amendment-rules.md`
- `knowledge/booking/rules.md`
- `knowledge/booking/traveller-rooming-rules.md`
- `knowledge/cancellation/rules.md`
- `knowledge/cancellation/detailed-business-rules.md`
- `contracts/booking-lifecycle.md`


## v4 mandatory architecture knowledge
- `knowledge/architecture/hybrid-modular-monolith.md`
- `knowledge/saga/saga-standard.md`
