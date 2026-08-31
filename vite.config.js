import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/YOKK-Church/", // Updated to match exact casing
  plugins: [
    react(),
    tailwindcss(),
  ],
})