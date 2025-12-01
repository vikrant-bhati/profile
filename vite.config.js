import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Set base to your GitHub Pages project path to avoid 404s for assets.
  base: "/profile/",
  plugins: [react()],
})
