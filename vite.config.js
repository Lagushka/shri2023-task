import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@': path.resolve("/public",)
    },
  },
  plugins: [react()],
  base: '/shri2023-task/',
})
