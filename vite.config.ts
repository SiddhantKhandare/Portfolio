import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Babel-based plugin
import path from "path";
// import { componentTagger } from "lovable-tagger"; // enable later

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      // Babel handles TSX/JSX automatically
      fastRefresh: mode === "development",
    }),
    // mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
