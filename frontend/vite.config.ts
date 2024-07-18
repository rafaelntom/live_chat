import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://live-chat-wzeb.onrender.com",
        changeOrigin: true, // Add this line to ensure the origin is properly set
        secure: false, // Add this line if you're running HTTPS locally and encountering issues
      },
    },
  },
});
