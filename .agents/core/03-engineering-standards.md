# Engineering Standards
- NestJS + TypeScript with explicit modules/dependency injection.
- Domain rules stay independent of controllers, Prisma and providers.
- Commands mutate; queries read (CQRS-lite is sufficient initially).
- External DTOs must never leak supplier/net cost, internal markup or secrets.
- DB changes use migrations and require ownership/FK/index/constraint/history/backward-compatibility review.
- Prefer deterministic rule services over duplicated conditionals.
- Approved rule IDs should be referenced by tests when practical.
