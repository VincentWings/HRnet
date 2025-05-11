// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration for React project
export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures relative paths in the build for proper asset loading
  build: {
    outDir: "build", // Sets the output directory to "build" for production
  },
  server: {
    port: 3000, // Sets the development server port to 3000
  },
  preview: {
    port: 5000, // Sets the preview server port to 5000 for testing production build
  },
});
