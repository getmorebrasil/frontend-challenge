module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 },
  ignorePatterns: ["node_modules/*", ".next/*", ".out/*", "!.prettierrc.js"],
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      settings: { react: { version: "detect" } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        "airbnb",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
      ],
      rules: {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "react/jsx-filename-extension": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "camelcase": "off",
        "react/jsx-props-no-spreading": "off",
        "consistent-return": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "import/prefer-default-export": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "react/no-array-index-key": "off"

      },
    },
  ],
};
