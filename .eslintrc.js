module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["solid"],
  extends: [
    "eslint:recommended",
    "plugin:solid/typescript",
    "plugin:prettier/recommended",
  ],
};
