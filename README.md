# React Boilerplate

React Router, TypeScript and Tailwind CSS.

## Development

```bash
bun install
bun run dev
```

App available at `http://localhost:5173`.

## Commands

| Command             | Purpose                    |
| ------------------- | -------------------------- |
| `bun run build`     | Build for production       |
| `bun run start`     | Serve the production build |
| `bun run typecheck` | Check TypeScript types     |
| `bunx orval`        | Generate the API client    |

## Environment variables

| Variable      | Purpose                                         | Default                              | Required |
| ------------- | ----------------------------------------------- | ------------------------------------ | -------- |
| `OPENAPI_URL` | OpenAPI specification URL for `orval.config.ts` | `http://localhost:3000/openapi.json` | No       |

Override the URL when generating the API client:

```bash
OPENAPI_URL=https://api.example.com/openapi.json bunx orval
```
