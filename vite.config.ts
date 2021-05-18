import { defineConfig } from "vite";
import path, { resolve } from "path";

export default defineConfig({
    build: {
        target: "es2015",
        lib: {
            entry: "components/root-element.ts",
            formats: ["es"],
        },
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
            },
            external: /^lit-element/,
        },
        minify: "terser",
        sourcemap: "inline",
    },
    resolve: {
        alias: [
            {
                find: "@components",
                replacement: path.resolve(__dirname, "components"),
            },
            { find: "@styles", replacement: path.resolve(__dirname, "styles") },
            { find: "@public", replacement: path.resolve(__dirname, "public") },
            { find: "@lib", replacement: path.resolve(__dirname, "lib") },
        ],
    },
});
