import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/background.ts"),
      name: "ExtensionBackground",
      // the proper extensions will be added
      fileName: "background",
    },
    minify: false,
    sourcemap: "inline",
    outDir: "dist/background",
    rollupOptions: {},
  },
});
