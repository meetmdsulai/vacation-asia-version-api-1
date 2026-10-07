# Vacation Asia Agent System v4 — Complete Baseline

This is the complete repository-based AI engineering knowledge system for Vacation Asia.

It contains specialist agents, business/domain knowledge, core engineering rules, contracts, workflows, architecture decisions, and Saga reference code.

## Installation
Copy the contents of this directory into `<repo>/.agents/`. Keep `.agents/` committed to Git.

## Required directories
- `agents/` — specialist agent roles
- `knowledge/` — durable business/domain/architecture knowledge
- `core/` — architecture and engineering standards
- `contracts/` — cross-domain contracts
- `workflows/` — development and Saga workflows
- `reference-code/saga/` — upgraded TypeScript Saga reference implementation

## v4 architecture
Normal CRUD uses Prisma. Medium transactional writes use application/domain services with Prisma transactions. Complex reads use Query Services with Prisma/TypedSQL/optimized SQL/views/functions when justified. Cross-domain state-changing workflows use Saga + domain ports. Modular-monolith communication uses local adapters; extracted microservices replace those with gRPC adapters. Durable asynchronous events use transactional outbox + RabbitMQ.

Start by reading `AGENTS.md`.
