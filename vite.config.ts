import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import prismjs from "vite-plugin-prismjs"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),
  prismjs({
    languages: 'all',
    theme: 'solarizedlight',
    css: true,
  }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
