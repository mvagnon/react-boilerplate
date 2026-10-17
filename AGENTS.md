# Project Instructions

## Introduction

This project is a React application boilerplate.

## Architecture

Use lightweight, feature-oriented hexagonal architecture. This layout describes responsibilities, not a file inventory. Create directories only when needed; update this document only when architectural boundaries change.

```text
.storybook/                  # Storybook configuration and shared preview annotations
app/                         # Application shell, providers, routing and global styles
├── api/                     # Orval-generated HTTP functions, query hooks and API types
├── assets/                  # Shared assets imported by application code
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

## Orval

Generates API functions, query hooks and types in `app/api/` from the backend's OpenAPI endpoint. Set `OPENAPI_URL` and run `bun run api:sync` to sync client with OpenAPI specs when needed; reuse the generated client and never edit it manually.

## Storybook

Create and maintain colocated stories for every shared presentational component in `app/components/`.
Exclude purely technical components such as wrappers, providers, and transition primitives; demonstrate them through the UI components that consume them instead.

Do not create stories for components in `app/features/<feature>/ui/` by default; add them only when explicitly requested.

- Provide a fully customizable playground through `args` and Controls for all public inputs: content, variants, sizes, states, and behavior.
- Configure `argTypes` with appropriate controls and all supported options, including every variant and size.
- Forward `args` to the component; do not hardcode values that prevent customization. Use editable `args` for inputs that cannot be represented by Controls.
- Use realistic, deterministic data without a live backend.
- Cover distinct, useful states—not every possible prop combination.
- Keep interactions functional; use `fn()` for callbacks and `play` for meaningful interaction checks.
- Colocate `*.stories.tsx`, use typed CSF (`satisfies Meta`, `StoryObj`), and keep stories aligned with component changes and removals.

Consult [Storybook documentation on Context7](https://context7.com/storybookjs/storybook) (`/storybookjs/storybook`).
