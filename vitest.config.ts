import { defineConfig, mergeConfig } from "vitest/config";
import sharedConfig from "./vite.shared.ts";

export default mergeConfig(
  sharedConfig,
  defineConfig({
    test: {
      environment: "node",
      include: ["tests/**/*.test.ts"],
    },
  }),
);
