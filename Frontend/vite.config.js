import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port:5173 ,
    allowedHosts: [
        '0362-2402-3a80-4662-2fc7-ddf8-76c1-7285-b2d4.ngrok-free.app'
    ]
}

  
})