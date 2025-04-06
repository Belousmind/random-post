import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filePath = fileURLToPath(import.meta.url);
const __dirname = dirname(__filePath);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "./src/shared/api"),
      "@helpers": path.resolve(__dirname, "./src/shared/helpers"),
      "@services": path.resolve(__dirname, "./src/shared/services"),
      "@UI": path.resolve(__dirname, "./src/shared/UI"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});
