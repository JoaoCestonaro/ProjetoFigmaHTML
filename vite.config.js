import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/InfoCursos-ProjetoIHC/',
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
  },
})
