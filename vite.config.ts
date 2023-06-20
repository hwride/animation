import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/animation/',
  plugins: [react(), visualizer()],
  build: {
    sourcemap: true,
  },
})
