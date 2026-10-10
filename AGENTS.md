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

## Roadmap

Project management URL: [GitHub](https://github.com/mvagnon/react-boilerplate/issues)

Consult it with the dedicated tool (`gh` CLI or appropriate MCP, etc.) to understand the project and make decisions that account for upcoming changes.

## Orval

Generates API functions, query hooks and types in `app/api/` from the backend's OpenAPI endpoint. Set `OPENAPI_URL` and run `bun run api:sync`; reuse the generated client and never edit it manually.

## Storybook

UI development and documentation workshop. Keep `*.stories.tsx` next to components and cover their meaningful states with fixed data, without a live backend. Run `bun run storybook` to open it or `bun run build-storybook` to build it.

Every component creation, update or deletion must include the corresponding story creation, update or deletion.

Consult [Storybook documentation on Context7](https://context7.com/storybookjs/storybook) (`/storybookjs/storybook`) for well-structured, testable stories. Use typed CSF (`satisfies Meta`, `StoryObj`), cover all applicable variants and states through `args`, and use `fn()` callback spies and `play` functions for meaningful interactions.
