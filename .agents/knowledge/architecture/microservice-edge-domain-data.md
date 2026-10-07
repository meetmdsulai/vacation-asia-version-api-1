# Distributed Deployment Architecture — APPROVED

When a domain is extracted or an explicit security boundary is deployed:

Client -> WAF/LB -> API/Edge Tier -> gRPC/mTLS -> Domain/Application Tier -> PostgreSQL/Redis.

API/Edge Tier responsibilities: authentication entry checks, authorization entry checks, DTO/schema validation, rate limiting, request normalization, API versioning, correlation/trace IDs, BFF/response composition. It has no database credentials/network route.

Authoritative domain/business rules remain in the Domain/Application Tier. Edge validation is not the source of business truth.

Domain/Application Tier owns use cases, domain validation, transactions, Saga participation, outbox and persistence.

Payment remains a strong candidate for early physical isolation.
