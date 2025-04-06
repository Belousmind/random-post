import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filePath = fileURLToPath(import.meta.url)
const __dirName = dirname(__filePath)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': path.resolve(__dirName, './src/shared'),
      '@pages': path.resolve(__dirName, './src/pages'),
      '@app': path.resolve(__dirName, './src/app'),
      '@styles': path.resolve(__dirName, './src/app/styles'),
    }
  }
})
