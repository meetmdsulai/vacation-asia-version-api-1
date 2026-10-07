# Hotel Operational Confirmation Rules
- HOT-CONF-001 Admin contacts the designated hotel reservation contact with the structured booking/quotation request; the legacy source names this template EMF01.
- HOT-CONF-002 Hotel confirmation captures supplier booking/confirmation number and booked-by/contact information where provided.
- HOT-CONF-003 Hotel confirmation is a gate for quotation approval, not merely informational availability.
- HOT-DOC-001 After required confirmations and quotation approval, customer receives the appropriate commercial/payment request. Legacy source names invoice EMF03; exact template naming is implementation/content configuration, not a hardcoded domain rule.
- HOT-DOC-002 After qualifying payment creates the booking, voucher and itinerary become eligible for generation/delivery. Legacy source names voucher EMF04 and itinerary EMF02.
