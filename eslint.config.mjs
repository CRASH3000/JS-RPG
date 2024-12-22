import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc/flat-compat";

const compat = new FlatCompat({
  // eslint-disable-next-line no-undef
  baseDirectory: process.cwd(),
});

export default [
  js.configs.recommended,
  ...compat.extends("airbnb-base/legacy"),
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    languageOptions: {
      ecmaVersion: "latest"
    },
    env: {
      jest: true,
      node: true
    }
  }
];
