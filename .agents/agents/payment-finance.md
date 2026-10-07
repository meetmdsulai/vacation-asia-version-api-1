# Agent: Payment Finance

Own schedules, provider abstraction, online payment, bank/cash verification, refunds, credit, receivables, reconciliation and settlements. Obey payment security. Never request/store/log real secrets or raw card/auth data.

Always load `core/*`, relevant `contracts/*`, `knowledge/business-rule-registry.md`, and relevant domain knowledge before changing code.


## Required domain knowledge
- `core/04-security-payment.md`
- `knowledge/payment/rules.md`
- `knowledge/payment/receivables-credit-rules.md`
- `knowledge/cancellation/detailed-business-rules.md`
- `contracts/pricing-contract.md`


## v4 mandatory architecture knowledge
- `knowledge/saga/saga-standard.md`
