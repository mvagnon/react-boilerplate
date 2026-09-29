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

1. Use `gh` to read this README and the relevant files at the requested ref (default: default branch). Record the commit SHA.
2. Follow the target project's instructions and conventions. Apply only the requested modules from the table below.
3. Briefly explain the changes, then merge the configuration without duplicates. Adapt commands and paths to the project.
4. In `package.json`, install missing dependencies needed by those modules and update existing ones to at least the boilerplate's versions. Prefer the latest stable releases; never downgrade. Use the project's package manager and update its lockfile.
5. For API generation, adapt `orval.config.ts` to the backend's OpenAPI URL and the project's structure and client needs.
6. Run the affected checks (and build if relevant). Report the changes, results and source SHA.

| Module          | Source files                                                                       |
| --------------- | ---------------------------------------------------------------------------------- |
| CI              | `.github/workflows/CI.yaml`, `package.json`                                        |
| Quality scripts | `package.json`, `eslint.config.ts`, `knip.json`, `tsconfig.json`, `vite.config.ts` |
| Git hooks       | `.simple-git-hooks.json`, `package.json`                                           |
| API generation  | `orval.config.ts`, `package.json`                                                  |
