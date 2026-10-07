# Formatting and Naming Standards

Status: APPROVED / MANDATORY

## Formatting

- Prettier is mandatory for TypeScript, JavaScript, JSON, Markdown, YAML and supported source files.
- The repository owns the Prettier configuration; editor-global settings must not override project formatting.
- CI must run `prettier --check .` and fail on unformatted files.
- Developers/agents should run `prettier --write .` (or the scoped equivalent) before completion.
- ESLint is mandatory for TypeScript naming and code-quality rules. Prettier does not enforce identifier naming.

Recommended root Prettier configuration:
- singleQuote: true
- semi: true
- trailingComma: all
- tabWidth: 2
- printWidth: 100
- endOfLine: lf

## TypeScript naming

- Ordinary `.ts` file names: camelCase. Examples: `hotelService.ts`, `createBooking.ts`, `pricingResolver.ts`.
- Test/spec suffixes are allowed: `hotelService.spec.ts`, `pricingResolver.test.ts`.
- Functions and methods: camelCase.
- Variables and parameters: camelCase.
- Object/application fields: camelCase unless representing an unavoidable external payload that is deliberately preserved at an adapter boundary.
- Classes, interfaces, type aliases, DTO classes, enums, decorators and other type-like declarations: PascalCase.
- Constants may use UPPER_CASE when they are true module/global constants; otherwise use camelCase.
- Do not prefix interfaces with `I` solely to indicate interface type.

## Folder naming

- Application/source folder names MUST use snake_case.
- Examples: `hotel_management/`, `quotation_booking/`, `application_services/`, `query_services/`.
- Framework/build/tool-required directory names are exempt when renaming would break ecosystem conventions or external tooling. Record non-obvious exceptions in the owning module README.

## PostgreSQL naming

All physical database identifiers MUST use snake_case:
- schemas
- tables
- columns
- indexes
- constraints
- sequences
- views
- materialized views
- functions/procedures
- SQL aliases intended as database-facing fields

Existing DB routine prefixes remain: `fn_`, `sp_`, `vw_`, `mv_`.

Examples:
- schema: `hotel_management`
- table: `hotel_room_inventory`
- column: `hotel_room_id`
- column: `available_room_count`
- index: `idx_hotel_room_inventory_hotel_room_id`

## Prisma boundary

TypeScript-facing Prisma usage should remain idiomatic to TypeScript while the physical PostgreSQL schema remains snake_case.
Use Prisma mapping where required:

```prisma
model HotelRoomInventory {
  id                 BigInt   @id @default(autoincrement())
  hotelRoomId        BigInt   @map("hotel_room_id")
  availableRoomCount Int      @map("available_room_count")
  inventoryDate      DateTime @map("inventory_date") @db.Date

  @@map("hotel_room_inventory")
}
```

Application code uses `hotelRoomId`; PostgreSQL uses `hotel_room_id`.
Do not leak physical database naming into domain/application DTOs merely because the database is snake_case.
Raw SQL MUST use the physical snake_case identifiers.

## API/external boundaries

- Internal TypeScript DTO/property naming defaults to camelCase.
- Public API JSON defaults to camelCase unless an approved API contract explicitly requires another convention.
- Third-party/provider payloads may retain provider field names only inside the provider adapter/contract boundary; map them into internal camelCase models.
- Protobuf field naming should follow protobuf conventions in `.proto`; generated TypeScript must be consumed through typed contracts/adapters and should not dictate database naming.

## Enforcement

Every coding agent must:
1. format changed files;
2. lint changed code;
3. typecheck affected TypeScript;
4. run relevant tests;
5. not mark work complete while known formatting/naming violations remain.

Database Architect must reject new physical DB identifiers that are not snake_case unless PostgreSQL/tooling requires an exception.
Architecture Governor must reject naming schemes that couple domain/application models to physical DB names.
