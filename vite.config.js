import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Fitness-and-Spa-Website/',
  plugins: [react()],
})
