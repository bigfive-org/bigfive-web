module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": "love",
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}",
        "*.ts",
        "*.js"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "rules": {
  },
  "plugins": ["json-files"]
}
