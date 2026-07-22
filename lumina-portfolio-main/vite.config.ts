import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      host: env.VITE_SERVER_HOST || "::",
      port: parseInt(env.VITE_SERVER_PORT || "8080", 10),
      hmr: {
        overlay: env.VITE_HMR_OVERLAY === "true" || env.VITE_HMR_OVERLAY === "1" ? true : false,
      },
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
