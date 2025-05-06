import { defineConfig } from "eslint/config";
import prettier from "eslint-plugin-prettier";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends(
        'eslint:recommended',
        "next",
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:jsx-a11y/recommended",
    ),

    plugins: {
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            React: "writable",
        },

        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "commonjs",

        parserOptions: {
            project: "./tsconfig.json",
            tsconfigRootDir: "./",
            jsx: true,
            warnOnUnsupportedTypeScriptVersion: false,
        },
    },

    settings: {
        "import/resolver": {
            typescript: {},
        },
    },

    rules: {
        "import/order": ["error", {
            groups: ["builtin", "external", "internal"],

            pathGroups: [{
                pattern: "react",
                group: "external",
                position: "before",
            }],

            pathGroupsExcludedImportTypes: ["react"],
            "newlines-between": "always",

            alphabetize: {
                order: "desc",
                caseInsensitive: true,
            },
        }],

        "@typescript-eslint/no-unused-vars": ["error", {
            destructuredArrayIgnorePattern: "^_$",
        }],

        "prettier/prettier": "error",
    },
}]);