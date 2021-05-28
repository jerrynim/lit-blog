module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    root: true,
    extends: ["google"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        quotes: ["error", "double"],
        indent: ["error", 4],
        "require-jsdoc": 0,
        "no-unused-vars": [
            "warn",
            { varsIgnorePattern: "HTMLElementTagNameMap" },
        ],
        "quote-props": 0,
        "object-curly-spacing": 0,
    },
};
