import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
require('dotenv').config()

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT || 3000,
    proxy: {
      '/api': {
        target: process.env.BACKEND_HOST
      },
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
