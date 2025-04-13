import { defineConfig } from "eslint/config";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: compat.extends("eslint:recommended"),
    plugins: {},

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      ecmaVersion: "latest",
      sourceType: "module",
    },

    settings: {},

    rules: {
      "no-console": "warn",
      "no-unused-vars": ["warn"],
      semi: ["error", "always"],
      quotes: ["error", "single"],
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      curly: ["error", "all"],
      eqeqeq: ["error", "always"],
    },
  },
]);
