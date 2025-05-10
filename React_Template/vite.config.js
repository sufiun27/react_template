import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@componentsA': path.resolve(__dirname, 'src/components/adminx'),
      '@featuresA': path.resolve(__dirname, 'src/features/adminx'),
      '@pagesA': path.resolve(__dirname, 'src/pages/adminx'),
      '@utilsA': path.resolve(__dirname, 'src/utils/adminx'),
      '@assetsA': path.resolve(__dirname, 'src/assets/adminx'),
      '@apiA': path.resolve(__dirname, 'src/api/adminx/axios.js')
    },
  },
});
