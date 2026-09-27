[![portfolio](https://img.shields.io/website?url=https%3A%2F%2Fmvagnon.dev&up_message=Visit&label=Portfolio&color=%23007fff)](https://mvagnon.dev)
[![bymeacoffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-Support-yellow?logo=buymeacoffee)](https://buymeacoffee.com/mvagnon)

# React Boilerplate

## Commands

| Command                | Purpose                                |
| ---------------------- | -------------------------------------- |
| `bun install`          | Install dependencies                   |
| `bun run dev`          | Start the development server           |
| `bun run build`        | Build for production                   |
| `bun run start`        | Serve the production build             |
| `bun run lint`         | Check lint rules; warnings fail        |
| `bun run lint:fix`     | Apply automatic lint fixes             |
| `bun run api:sync`     | Regenerate the client from the backend |
| `bun run typecheck`    | Check TypeScript types                 |
| `bun run test`         | Run Vitest tests in `tests/`           |
| `bun run knip`         | Find unused code and dependencies      |
| `bun run staticchecks` | Run lint, typecheck, Knip and tests    |

## Env variables

| Variable      | Purpose                            | Default                              |
| ------------- | ---------------------------------- | ------------------------------------ |
| `OPENAPI_URL` | Backend OpenAPI URL for `api:sync` | `http://localhost:3000/openapi.json` |

`api:sync` requires backend access. Never edit generated files; run `staticchecks` after syncing.

## Setup for an existing project

Ask your agent:

```text
Use `mvagnon/react-boilerplate` as a reference to adopt CI, quality scripts and Git hooks in this project.
Follow its README's "Setup for an existing project" instructions using `gh`.
```

Agent instructions:

1. Use `gh` to resolve the requested ref (default: the repository's default branch) to a commit SHA. Read this README and all source files remotely at that SHA; do not rely on a local clone.
2. Inspect the target project's instructions, stack, package manager and existing configuration. Adopt only the requested modules using the sources below.
3. Explain the proposed changes, then merge into existing configuration. Preserve project conventions and adapt framework-specific commands, paths and dependencies.
4. If adopting API generation: Orval generates TypeScript types, HTTP functions and TanStack Query hooks from the backend's OpenAPI specification. Adapt `orval.config.ts` to the target project: input URL, output paths (`target`, `schemas`), grouping (`mode`) and client settings. Do not assume `app/api/` exists or fits its structure.
5. Run the affected checks and build when relevant. Report changes, validation results and the source SHA. Reapplying the setup must not introduce duplicates or unnecessary changes.

| Module          | Source files                                                                       |
| --------------- | ---------------------------------------------------------------------------------- |
| CI              | `.github/workflows/CI.yaml`, `package.json`                                        |
| Quality scripts | `package.json`, `eslint.config.ts`, `knip.json`, `tsconfig.json`, `vite.config.ts` |
| Git hooks       | `.simple-git-hooks.json`, `package.json`                                           |
| API generation  | `orval.config.ts`, `package.json`                                                  |
