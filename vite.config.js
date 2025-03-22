import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Import path module
import { fileURLToPath } from "url";

// Define __dirname equivalent for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Set alias @ to src folder
    },
  },
});
