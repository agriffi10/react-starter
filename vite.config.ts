/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      host: "0.0.0.0",
      port: 3000,
      proxy: {
        "/api": {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          secure: false,
        },
        "/token": {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    preview: {
      port: 3001,
    },
  };
});
