import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteLegacyPlugin from '@vitejs/plugin-legacy'
import sass from 'sass'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    viteLegacyPlugin({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 1212,
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
})
