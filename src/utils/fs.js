const fs = require("fs").promises;
const path = require("path");

// Lets not be too eager
const allowDir = (dir, _fileList, depth) => {
  if (dir.includes("node_modules") && depth > 1) return;
  if (dir.includes(".git")) return;
  if (dir.includes("_build")) return;
  if (dir.includes("build")) return;
  if (dir.includes("dist")) return;
  return true;
};

// And less detailed
const allowFile = (file, _fileList, _depth) => {
  if (file.includes("node_modules")) {
    return file.endsWith("package.json");
  }
  return true;
};

// https://gist.github.com/kethinov/6658166#gistcomment-2934861
async function walk(dir, fileList = [], depth = 0) {
  const files = await fs.readdir(dir);

  for (const file of files) {
    const filepath = path.join(dir, file);

    try {
      const stat = await fs.stat(filepath);
      if (stat.isDirectory()) {
        if (allowDir(dir, fileList, depth) !== true) return fileList;
        fileList = await walk(filepath, fileList, depth + 1);
      } else {
        if (allowFile(filepath, fileList, depth) !== true) continue;
        fileList.push(filepath);
      }
    } catch (e) {
      // ignore
    }
  }

  return fileList;
}

module.exports = {
  walk,
};
