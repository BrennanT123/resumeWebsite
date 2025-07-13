import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    preview: {
    allowedHosts: ["brennanturi-production.up.railway.app"],
  },
  server: {
    allowedHosts: ["brennanturi-production.up.railway.app"],
  },
})
