import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  const { VITE_API_URL } = env
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: VITE_API_URL,
          changeOrigin: true,
          cookiePathRewrite: {
            '*': '/'
          },
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
