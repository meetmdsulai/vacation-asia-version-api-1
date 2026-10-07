# Vacation Asia Agent Router

This repository uses domain-specialist agents backed by shared, version-controlled knowledge.

## Mandatory precedence
1. Approved Business Rules
2. Approved ADRs
3. Domain Contracts
4. Architecture Standards
5. Coding Standards
6. Agent Instructions
7. Developer Task Prompt
8. AI Assumptions

If two sources conflict, emit `RULE CONFLICT` and stop the conflicting design/code decision until resolved. Never silently pick a lower-precedence rule.

## Mandatory loading sequence
Before domain work, load:
1. `core/01-architecture-principles.md`
2. `core/02-domain-boundaries.md`
3. `core/03-engineering-standards.md`
4. `knowledge/business-rule-registry.md`
5. the owning `agents/<agent>.md`
6. all knowledge files named by that agent
7. relevant contracts/workflows

## Routing
- Architecture/cross-domain: `agents/architecture-governor.md`
- Database/migrations/query strategy: `agents/database-architect.md`
- Hotel: `agents/hotel-management.md`
- Transport: `agents/transport-management.md`
- Ferry: `agents/ferry-management.md`
- Sightseeing: `agents/sightseeing-management.md`
- Meal: `agents/meal-management.md`
- Guide: `agents/guide-management.md`
- Fixed/Personalized/Custom packages: `agents/package-personalization.md`
- Quotation/Booking/Amendment/Cancellation: `agents/quotation-booking.md`
- Pricing/markup/VAT: `agents/pricing-commercial.md`
- Payment/Credit/Receivables/Refund: `agents/payment-finance.md`
- MICE: `agents/mice-management.md`
- Operations: `agents/operations-management.md`
- Supplier portal/workflow: `agents/supplier-portal.md`
- Documents/notifications: `agents/documents-notifications.md`
- Customer/Agency experience: `agents/customer-agency-experience.md`
- Security: `agents/security-review.md`
- QA: `agents/qa-testing.md`
- Delivery: `agents/devops-delivery.md`

## Non-negotiable behavior
- Business logic is authoritative; historical DB/table examples are not automatically authoritative schema requirements.
- Never invent missing business rules. Mark `NEEDS_CLARIFICATION`.
- Never convert an implementation suggestion into an approved business rule.
- Use stable Rule IDs in code comments/tests/ADRs when useful.

## v4 Mandatory Architecture Context
Before architecture, persistence, booking workflow, or service-extraction work, load:
- `knowledge/architecture/hybrid-modular-monolith.md`
- `knowledge/architecture/microservice-edge-domain-data.md`
- `knowledge/saga/saga-standard.md`

For Saga implementation, use `reference-code/saga/` as the upgraded reference derived from the user-supplied Saga factory. Do not restore the old pre-success compensation behavior.
