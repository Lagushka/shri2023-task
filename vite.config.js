/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "path"
import { ViteMinifyPlugin } from 'vite-plugin-minify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteMinifyPlugin({})
  ],
  base: '/shri2023-task/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html")
      }
    }
  },
})
