# Installation

Copy `AGENTS.md` and the complete `.agents/` directory into the root of the Vacation Asia repository.

Expected layout:

vacation-asia/
  AGENTS.md
  .agents/
    agents/
    knowledge/
    core/
    contracts/
    workflows/
    reference-code/
  apps/
  packages/
  prisma/
  package.json

Open `vacation-asia/` itself as the workspace folder in VS Code/Codex.

Do not place the kit under `apps/api` or another nested application folder.
Do not add `.agents/` to `.gitignore`.

## Formatting setup

The kit includes `prettier.config.mjs`, `.prettierignore`, `.editorconfig`, and an ESLint naming-rule example.
When initializing the TypeScript workspace, install Prettier and ESLint/@typescript-eslint as dev dependencies and expose scripts such as:

- `format`: `prettier --write .`
- `format:check`: `prettier --check .`
- `lint`: repository ESLint command
- `typecheck`: repository TypeScript no-emit check

Enable VS Code format-on-save with Prettier as the default formatter if desired; the repository configuration remains authoritative.
