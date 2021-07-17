import { defineConfig } from "vite";
import path, { resolve } from "path";
import copy from "rollup-plugin-copy";
import fs from "fs";
interface ImportMetaEnv {
    VITE_APP_TITLE: string;
    // more env variables...
}
if (process.env.NODE_ENV === "production") {
    const urls = [];

    const getUrls = (_path: string) => {
        const files = fs.readdirSync(_path);
        files.forEach((filename) => {
            if (filename.endsWith("index.ts")) {
                //? index.ts파일 경로
                urls.push(_path.replace(`${__dirname}/pages`, ""));
            } else if (!filename.endsWith(".ts")) {
                //? 폴더는 내부탐색
                getUrls(`${_path}/${filename}`);
            } else {
                urls.push(
                    `${_path}/${filename}`
                        .replace(`${__dirname}/pages`, "")
                        .replace(".ts", ""),
                );
            }
        });
    };
    getUrls(`${__dirname}/pages`);
    const urlTags = urls
        .map((url) => `<url><loc>https://www.jerrynim.io${url}</loc></url>`)
        .join("");

    const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlTags}
    </urlset>
    `;

    try {
        fs.writeFileSync(`${__dirname}/public/sitemap.xml`, sitemap);
    } catch (e) {
        console.log(e);
    }
}

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
