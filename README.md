# React Boilerplate

React Router, TypeScript and Tailwind CSS.

## Development

```bash
bun install
bun run dev
```

App available at `http://localhost:5173`.

## Commands

| Command                | Purpose                                |
| ---------------------- | -------------------------------------- |
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

## Environment variables

| Variable      | Purpose                                         | Default                              | Required |
| ------------- | ----------------------------------------------- | ------------------------------------ | -------- |
| `OPENAPI_URL` | OpenAPI specification URL for `orval.config.ts` | `http://localhost:3000/openapi.json` | No       |

Override the URL when generating the API client:

```bash
OPENAPI_URL=https://api.example.com/openapi.json bun run api:sync
```

The backend's OpenAPI specification is the source of truth; no schema copy is stored here.
`api:sync` requires backend access and generates one folder per OpenAPI tag under `app/api/`, with shared API types in `app/api/models/`. Do not edit generated files manually.
After synchronization, run `bun run staticchecks` to check frontend compatibility.
