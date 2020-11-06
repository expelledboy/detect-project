const complex = [
  ".editorconfig",
  ".env",
  ".dockerignore",
  ".env.example",
  "Makefile",
  "README.md",
  "nodemon.json",
  "example/submit.sh",
  "example/.env",
  "package-lock.json",
  "package.json",
  "jest.config.js",
  "Dockerfile",
  "docker-compose.yml",
  "tags",
  "scripts/setup-actions.sh",
  "coverage/index.html",
  "coverage/sort-arrow-sprite.png",
  ".eslintrc.json",
  "src/middleware/auth.js",
  "src/models/Transaction.js",
  "src/models/Action.js",
  "src/__tests__/utils.spec.js",
  "src/utils.js",
  "src/api.js",
  "src/routes",
  "src/routes/transaction.js",
];

const js = ["package-lock.json", "package.json", "src/index.js"];
const ts = ["tsconfig.json", "src/index.ts"];
const expo = [".expo-shared/assets.json"];

const context = {
  files: complex,
};

module.exports = { context, complex, js, ts, expo };
