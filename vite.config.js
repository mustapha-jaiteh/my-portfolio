import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Force Vite to pre-bundle these dependencies
    include: [
      "framer-motion",
      "react-tilt",
      "react-vertical-timeline-component",
      "@emailjs/browser",
      "@react-three/drei",
      "three",
      "prop-types",
    ],
  },
});
