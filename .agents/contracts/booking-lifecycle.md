# Booking Lifecycle Contract
`Quotation -> UNDER_REVIEW -> APPROVED -> Initial Payment >=50% -> Booking`

Approval readiness requires Hotel + Sightseeing confirmations. Transport + Meal confirmation may occur after booking through Operations.
Before initial payment, changes are Quotation Revisions. After payment, permitted changes are Admin-controlled Booking Amendments.
Do not create one giant booking status: keep quotation, booking, payment, component and operations states separately and derive overall health.
