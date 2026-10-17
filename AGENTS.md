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

Storybook is an interactive UI workshop, not an exhaustive component inventory.

Create stories only for components whose appearance or behavior benefits from standalone exploration: controls, cards, dialogs, navigation, and meaningful UI compositions. Being a leaf component is neither required nor sufficient.

Skip implementation details such as providers, technical wrappers, and transition primitives; demonstrate them through consuming components instead.

- Provide a customizable playground using `args` and Controls for meaningful public inputs: content, variants, sizes, states, and behavior.
- Configure `argTypes` when needed for clear, usable controls.
- Use realistic, deterministic data without a live backend.
- Cover distinct, useful states—not every possible prop combination.
- Keep interactions functional; use `fn()` for callbacks and `play` for meaningful interaction checks.
- Colocate `*.stories.tsx`, use typed CSF (`satisfies Meta`, `StoryObj`), and keep stories aligned with component changes and removals.
- Do not change production architecture just to accommodate stories.

Consult [Storybook documentation on Context7](https://context7.com/storybookjs/storybook) (`/storybookjs/storybook`).
Run `bun run storybook` or `bun run build-storybook`.
