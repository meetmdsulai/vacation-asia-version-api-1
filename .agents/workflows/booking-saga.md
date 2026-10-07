# Booking Saga Guidance
Cross-domain booking/fulfilment uses orchestration/compensation, never one distributed transaction. Exact sequence follows lifecycle: Hotel/Sightseeing confirmation before quotation approval; Transport/Meal operational confirmation can follow booking. Payment/refund compensation is financial workflow, never destructive deletion.
