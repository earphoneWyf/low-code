module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: ["airbnb"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  };
  