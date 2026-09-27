import type { ConfigExternal } from "orval";

export default {
  api: {
    input: {
      target: process.env.OPENAPI_URL ?? "http://localhost:3000/openapi.json",
    },
    output: {
      target: "./src/api/generated.ts",
      client: "react-query",
      httpClient: "fetch",
      formatter: "prettier",
    },
  },
} satisfies ConfigExternal;
