import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: '/pmv-si-2026-1-pe3-t3-grupo-04/',
  server: {
    host: true, // Listen on all local IPs
    port: 5173,
    watch: {
      usePolling: true, // Often required for Docker volumes
    }
  }
})
