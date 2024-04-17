import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   server: {
      proxy: {
         "/api": "https://fwm17-be-peword.vercel.app/v1/",
      },
   },
});
