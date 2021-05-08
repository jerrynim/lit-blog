import { defineConfig } from "vite";
import path from "path";
import copy from "rollup-plugin-copy";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

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

    plugins: [
        nodeResolve(),
        commonjs(),
        copy({
            targets: [
                {
                    src: "index-prod.html",
                    dest: "dist",
                    rename: "index.html",
                },
            ],
            hook: "writeBundle",
        }),
    ],
});
