module.exports = {
   env: {
      browser: true,
      amd: true,
      node: true,
   },
   extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
   parser: "@typescript-eslint/parser",
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
   },
   plugins: ["react", "@typescript-eslint"],
   rules: {
      "newline-before-return": "warn",
      "react/prop-types": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unused-vars": [
         "warn",
         {
            argsIgnorePattern: "^_",
         },
      ],
   },
};
