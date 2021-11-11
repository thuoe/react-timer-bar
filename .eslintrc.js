module.exports = {
"env": {
  "browser": true,
  "es2021": true
    },
    "extends": [
        "airbnb-typescript",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "import"
    ],
    "rules": {
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
};
