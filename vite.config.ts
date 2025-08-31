import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {resolve} from "path";
// import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/

export default defineConfig({

  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // @ => src 目录
    },
  },
})
