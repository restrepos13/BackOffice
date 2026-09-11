import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' para que el build funcione abriendo dist/index.html directo, sin servidor
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
