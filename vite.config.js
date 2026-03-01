import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base path is '/' for User/Organization pages (e.g., https://<username>.github.io/)
  base: '/',
})
