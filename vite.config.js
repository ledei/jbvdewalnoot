import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    "/api": {
      target: "https://jbv.niklas-van-nguyen.workers.dev/",
      changeOrigin: true,
      secure: false,
    },
  },
});
