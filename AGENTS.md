# Project Instructions

## Architecture

Use lightweight, feature-oriented hexagonal architecture. This layout describes responsibilities, not a file inventory. Create directories only when needed; update this document only when architectural boundaries change.

```text
.storybook/                  # Storybook configuration and shared preview annotations
app/                         # Application shell, providers, routing and global styles
├── api/                     # Orval-generated HTTP functions, query hooks and API types
├── components/              # Shared presentational UI and colocated stories
├── routes/                  # Route components composing feature UI
└── features/
    └── <feature>/
        ├── domain/          # Business types and pure business rules
        ├── application/     # Use cases and the ports they require
        ├── adapters/        # API adapters and DTO-to-domain mapping
        └── ui/              # Feature presentation, orchestration and colocated stories
public/                      # Static assets
tests/                       # Node-based Vitest unit and focused integration tests
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

## Storybook

- Keep `*.stories.tsx` and optional MDX documentation next to their components in `app/components/` or `app/features/<feature>/ui/`. Do not create a separate component implementation or a root `stories/` directory.
- Prefer stories for presentational components. Cover meaningful variants and applicable loading, error, empty and populated states with deterministic props; do not call a live backend.
- Use typed CSF stories with `satisfies Meta<typeof Component>` and `StoryObj<typeof meta>`. Enable `autodocs` for reusable components; use `fn()` from `storybook/test` for callback spies.
- Optional `play` functions demonstrate meaningful interactions inside Storybook; they are not part of `bun run test`.
- Import application CSS in `.storybook/preview.ts`. `vite.shared.ts` supplies Tailwind and TypeScript aliases to the app, Storybook and Vitest without the React Router application plugin.
- Add router or query providers only to stories that need them. Isolate state per story; never reuse the application's QueryClient or import route modules with generated route types into stories.
- Use the accessibility addon to inspect stories in the workshop. Storybook is for UI development and documentation, not an automated browser-test suite.
- `bun run storybook` starts the workshop; `bun run build-storybook` builds it. Do not add Playwright, browser runners or automated Storybook tests unless explicitly requested.

## Conventions and validation

- Keep application code under `app/`; `~/*` resolves to `app/*`.
- Keep unit and focused integration tests in the root `tests/` directory, named `*.test.ts`. UI stories remain colocated with components.
- `bun run test` runs only `tests/**/*.test.ts` in Node, without a browser or Storybook stories. Prefer lightweight unit and focused integration tests. CI runs `staticchecks` and builds the app and Storybook.
- During diff-check, run `bun run staticchecks` after implementation changes.
- For broad or risky changes, run `act -W .github/workflows/CI.yaml --container-architecture linux/amd64 --action-offline-mode`.
