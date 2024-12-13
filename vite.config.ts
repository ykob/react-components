import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": `${__dirname}/src/`,
      "styled-system": `${__dirname}/styled-system/`,
    },
  },
});
