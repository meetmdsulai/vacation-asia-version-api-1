# Database infrastructure

Prisma 7 PostgreSQL datasource with an intentionally empty model set. Client
generation does not create tables or require a live database. Generated code is
ignored by version control and regenerated before builds.

The prisma.config.ts filename is Prisma's required configuration convention.
Do not add dummy models just to generate a client. Future approved models must
map application camelCase fields and PascalCase models to physical snake_case
with @map/@@map. Each domain owns its repositories and schema access.

The factory provides infrastructure only. It does not expose a global repository
or authorize access across domains. Migration scripts are explicit and separate
from application startup.
