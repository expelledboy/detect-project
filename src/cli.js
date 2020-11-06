#!/usr/bin/env node

const { walk } = require("./utils/fs");
const { match } = require("./index");

const detect = async (filepath) => {
  const dir = filepath.replace(/\/$/, "");
  const files = await walk(dir);
  const relative = files.map((file) => file.replace(dir + "/", ""));
  const context = { files: relative };
  return match(context);
};

(async () => {
  const path = process.argv[2] || process.cwd();
  const project = await detect(path);
  if (project) console.log(project);
  process.exit(1);
})();
