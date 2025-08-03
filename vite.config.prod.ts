import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Production Vite config for Vercel deployment
export default defineConfig({
  build: {
    outDir: "dist/spa",
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["@tanstack/react-query", "@radix-ui/react-toast"],
          animation: ["framer-motion"],
          icons: ["lucide-react"],
        },
      },
    },
    // Enable compression with default minifier
    minify: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // No source maps for production
    sourcemap: false,
    // Optimize assets
    assetsInlineLimit: 4096,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});
