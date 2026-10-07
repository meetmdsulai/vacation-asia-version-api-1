# Security & Payment Standards
- Payment Service is private; public payment actions enter through authenticated application/API-gateway flows.
- Provider callbacks use controlled webhook ingress; Payment Service itself remains private.
- Provider secrets live only in a secrets manager, never code, DB business data, committed env, prompts or agent knowledge.
- Provider-specific logic stays in adapters (TTB initially).
- Payment state transitions are domain-controlled, idempotent and auditable.
- Distinguish Payment, Attempt/Transaction, Refund, Settlement/Reconciliation, Receivable and Credit.
- Never store/log PAN, CVV, PIN, OTP, bank credentials or raw sensitive auth payloads.
