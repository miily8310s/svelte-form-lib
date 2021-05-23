module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@ota-meshi/svelte/recommended",
    // MEMO: unavailable @typescript-eslint when svelte-eslint-plugin is used.
    // "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  // parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  // plugins: ["@typescript-eslint"],
  rules: {},
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
};
