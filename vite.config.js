import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // use repo name as base path if not using custom domain on a non-root repo
  base: '/r1zky.github.io/',
})
