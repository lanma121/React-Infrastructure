module.exports = {
    root: true,
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:jest/recommended",
  
      "plugin:prettier/recommended",
      "prettier/react",
    ],
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    plugins: ["react", "react-hooks"],
    parserOptions: {
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    overrides: [
      {
        files: ["src/**/*.{ts,tsx}"],
        extends: [
          "plugin:@typescript-eslint/recommended",
          "prettier/@typescript-eslint",
        ],
        rules: {},
        plugins: ["@typescript-eslint"],
        parser: "@typescript-eslint/parser",
        parserOptions: {
          tsconfigRootDir: "./",
        },
      },
    ],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  };
  