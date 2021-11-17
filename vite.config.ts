import { defineConfig } from "vite";
import path from "path";
import fs from "fs";
import resolve from "@rollup/plugin-node-resolve";
import { parseDate } from "./lib";
import copy from "rollup-plugin-copy";

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
        .map((url) => {
            if (url !== "/404") {
                return `  <url>\n    <loc>https://jerrynim.dev${url}</loc>\n  </url>\n`;
            }
        })
        .join("");

    const date = parseDate(new Date());
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://jerrynim.dev/sitemap_post.xml</loc>
  </sitemap>
</sitemapindex>`;
    const sitemapPost = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlTags}
</urlset>`;
    try {
        fs.writeFileSync(`${__dirname}/public/sitemap.xml`, sitemap);
        fs.writeFileSync(`${__dirname}/public/sitemap_post.xml`, sitemapPost);
    } catch (e) {
        console.warn(e);
    }
}

export default defineConfig({
    build: {
        target: "es2020",
        lib: {
            entry: "components/root-element.ts",
            formats: ["es"],
        },
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "index.html"),
            },
        },
        minify: "terser",
        sourcemap: "inline",
    },
    plugins: [
        resolve(),
        copy({
            targets: [
                {
                    src: "@webcomponents",
                    dest: "dist",
                },
            ],
            hook: "writeBundle",
        }),
    ],
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
