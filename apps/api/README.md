# API

NestJS composition root for the modular monolith. Health is the only implemented
capability. Run commands from the repository root.

Each future capability owns its domain, application, infrastructure and
presentation folders. Export typed capability ports/contracts; do not import
another capability's repositories. Pure application services are wired using
Nest factory providers so that their ports carry no framework dependencies.

Only infrastructure adapters import the database package. Health's Prisma
adapter owns its client and closes it on shutdown. No global database repository
is exported to business modules.
