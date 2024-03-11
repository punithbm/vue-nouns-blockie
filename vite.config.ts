import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue(), dts({})],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "NounsBlockie",
      fileName: (format) => `nouns-blockie.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
