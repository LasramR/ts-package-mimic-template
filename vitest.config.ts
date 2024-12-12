import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    // globalSetup: "./tests/globalSetup.ts",
    dir: "./tests",
    coverage: {
      enabled: false,
      reportsDirectory: "./.cache/vitest/coverage",
      thresholds: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
    cache: {
      dir: "./.cache/vitest/",
    },
    exclude: ["node_modules", "dist"],
    testTimeout: 60 * 1000,
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
  },
});
