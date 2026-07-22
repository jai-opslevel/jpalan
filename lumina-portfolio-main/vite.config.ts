import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Server configuration - can be overridden via environment variables
const getServerConfig = () => ({
  host: process.env.VITE_JPALAN_SERVER_HOST || "::",
  port: parseInt(process.env.VITE_JPALAN_SERVER_PORT || "8080", 10),
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    ...getServerConfig(),
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
