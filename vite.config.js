import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy as rotas de API para o backend durante desenvolvimento
    proxy: {
      '/auth': 'http://localhost:3000',
      '/api': 'http://localhost:3000'
    }
  },
})
