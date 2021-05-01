import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: "components/root-element.ts",
            formats: ["es"],
        },
        rollupOptions: {
            external: /^lit-element/,
        },
    },
    resolve: {
        alias: [
            { find: "@styles", replacement: path.resolve(__dirname, "styles") },
            { find: "@lib", replacement: path.resolve(__dirname, "lib") },
        ],
    },
});
