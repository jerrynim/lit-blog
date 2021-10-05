import { defineConfig } from "vite";
import path from "path";
import fs from "fs";
import resolve from "@rollup/plugin-node-resolve";
import { parseDate } from "./lib";

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
                return `    <url>\n        <loc>https://blog.jerrynim.io${url}</loc>\n    </url>\n`;
            }
        })
        .join("");

    const date = parseDate(new Date());
    const sitemap = `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>https://blog.jerrynim.io/sitemap_post.xml</loc>
        <lastmod>${date}</lastmod>
    </sitemap>
</sitemapindex>`;
    const sitemapPost = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
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
    plugins: [resolve()],
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
