import { defineConfig } from "vite";
import path, { resolve } from "path";
import copy from "rollup-plugin-copy";

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
    plugins: [
        copy({
            targets: [
                {
                    src: ".yarn/unplugged/lit-element-npm-2.5.1-7fccfb6b01/node_modules/lit-element",
                    dest: "dist",
                },
                {
                    src: ".yarn/unplugged/lit-html-npm-1.4.1-4c175266aa/node_modules/lit-html/",
                    dest: "dist",
                },
            ],
            hook: "writeBundle",
        }),
    ],
});
