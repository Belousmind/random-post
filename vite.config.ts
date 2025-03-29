import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filePath = fileURLToPath(import.meta.url)
const __dirname = dirname(__filePath)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@services": path.resolve(__dirname, "./src/shared/services"),
      "@types": path.resolve(__dirname, "./src/shared/types"),
      "@UI": path.resolve(__dirname, "./src/shared/UI"),
    }
  }
})
