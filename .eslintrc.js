module.exports = {
  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "prettier",
  ],
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: "./",
    project: ["tsconfig.json"],
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/consistent-type-definitions": [
      "error",
      "type",
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "off",
      {
        allowExpressions: true,
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
    ],
    "max-len": [
      "warn",
      {
        code: 68,
      },
    ],
    "import/no-unresolved": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    "import/no-cycle": [
      2,
      {
        maxDepth: 1,
      },
    ],
    "prettier/prettier": "error",
  },
};
