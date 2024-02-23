import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    ,
    tsconfigPaths(),
    vue(),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: "src/NounsBlockie.vue",
      name: "index",
      fileName: () => `index.js`,
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
