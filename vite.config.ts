import { fileURLToPath, URL } from 'node:url'
import mockServer from 'vite-plugin-mock-server'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mockServer({
      urlPrefixes: [
        '/api/messages'
      ],
      middlewares: [
        (req, res, next) => {
          console.log('Apply middleware for', req.url)
          next()
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
