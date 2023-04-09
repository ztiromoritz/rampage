import { defineConfig } from "vite";
import { watch } from "vite-plugin-watch";
export default defineConfig(({ command }) => ({
  plugins: [
    watch({
      pattern: "pico8/cards/main.p8",
      command:
        "./bin/pico-8/pico8 -export ./public/p8/export/main.js ./pico8/cards/main.p8",
    }),
  ],
}));
