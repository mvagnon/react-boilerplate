# Project Instructions

## Architecture

Use lightweight, feature-oriented hexagonal architecture. This layout describes responsibilities, not a file inventory. Create directories only when needed; update this document only when architectural boundaries change.

```text
app/                         # Application shell, providers, routing and global styles
├── api/                     # Orval-generated HTTP functions, query hooks and API types
├── components/              # Shared presentational UI
├── routes/                  # Route components composing feature UI
└── features/
    └── <feature>/
        ├── domain/          # Business types and pure business rules
        ├── application/     # Use cases and the ports they require
        ├── adapters/        # API adapters and DTO-to-domain mapping
        └── ui/              # Feature presentation and orchestration
public/                      # Static assets
tests/                       # Vitest tests
```

### Rules

- Default to generated Orval hooks, HTTP functions and API types. A feature may contain only `ui/`; containers can use generated hooks directly.
- Add `domain/`, `application/` and `adapters/` only for actual frontend business behavior. The generated client already provides the HTTP adapter.
- Do not duplicate API types or add pass-through adapters to satisfy the folder structure. Define domain types only for actual business concepts.
- `domain/` has no React, router, TanStack Query, HTTP or generated API imports.
- `application/` depends only on the domain and defines required ports. Pass implementations as function arguments; no DI framework.
- `adapters/` implements those ports with generated HTTP functions and maps API data to domain concepts when needed.
- `ui/` wires use cases and adapters. Routes compose containers, which pass data and state to presentational components.
- Generated hooks stay in `app/api/`. Custom hooks belong in `ui/` only for meaningful behavior or orchestration; no mandatory `hooks/` layer or systematic wrappers.

## API generation

- The backend's OpenAPI endpoint is the sole source of truth; do not store a schema copy.
- `bun run api:sync` uses `OPENAPI_URL` and `orval.config.ts` to generate HTTP functions and query hooks by OpenAPI tag under `app/api/` (`tags-split`), with API types in `app/api/models/`. Never hand-edit generated files.
- Sync requires backend access and stays separate from `staticchecks`. Run `staticchecks` after syncing.

## Conventions and validation

- Keep application code under `app/`; `~/*` resolves to `app/*`.
- Keep tests in the root `tests/` directory, named `*.test.ts`.
- During diff-check, run `bun run staticchecks` after implementation changes.
- For broad or risky changes, run `act -W .github/workflows/CI.yaml --container-architecture linux/amd64 --action-offline-mode`.
