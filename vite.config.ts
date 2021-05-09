import { defineConfig } from "vite";
import path from "path";
import copy from "rollup-plugin-copy";
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

    plugins: [
        copy({
            targets: [
                {
                    src: "index-prod.html",
                    dest: "dist",
                    rename: "index.html",
                },
                {
                    src: "node_modules/lit-element/",
                    dest: "dist",
                },
                {
                    src: "node_modules/@lit/",
                    dest: "dist",
                },
                {
                    src: "node_modules/lit-html/",
                    dest: "dist",
                },
            ],
            hook: "writeBundle",
        }),
    ],
});
