import { defineConfig } from "vite";
import path from "path";
import { resolve } from "path";

export default defineConfig({
    build: {
        lib: {
            entry: "components/root-element.ts",
            formats: ["es"],
        },
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                nested: resolve(__dirname, "pages/index.ts"),
            },
            external: /^lit-element/,
        },
        minify: "terser",
    },
    resolve: {
        alias: [
            { find: "@styles", replacement: path.resolve(__dirname, "styles") },
            { find: "@lib", replacement: path.resolve(__dirname, "lib") },
        ],
    },

    plugins: [],
});
