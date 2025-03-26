import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const conditionalPlugins: [string, Record<string, any>][] = [];

// https://vitejs.dev/config/
export default defineConfig({
  base:
    process.env.NODE_ENV === "development"
      ? "/"
      : process.env.VITE_BASE_PATH || "/",
  optimizeDeps: {
    entries: ["src/main.tsx"],
  },
  plugins: [
    react({
      plugins: conditionalPlugins,
    }),
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@pages': path.resolve(__dirname, './src/pages')
    },
  },
  server: {
    // @ts-ignore
    allowedHosts: true,
  },
});
