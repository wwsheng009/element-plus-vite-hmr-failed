import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log("🦕 vite.config.ts/defineConfig", command, mode);

  return {
    plugins: [vue()]
  };
});
