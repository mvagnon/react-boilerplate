import { reactRouter } from "@react-router/dev/vite";
import { defineConfig, mergeConfig } from "vite";
import sharedConfig from "./vite.shared.ts";

export default mergeConfig(
  sharedConfig,
  defineConfig({ plugins: [reactRouter()] }),
);
