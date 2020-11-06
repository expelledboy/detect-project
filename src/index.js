const { haveFiles } = require("./inspect");

const typescript = {
  type: "typescript",
  exact: [haveFiles(["package.json", "**/*.ts", "tsconfig.json"])],
};

const javascript = {
  type: "javascript",
  exact: [haveFiles(["package.json", "**/*.js"])],
};

const expo = {
  type: "expo",
  exact: [haveFiles([".expo-shared/assets.json"])],
};

const gatsby = {
  type: "gatsby",
  exact: [haveFiles(["gatsby-config.js"])],
};

// TODO by directory
// const nativeApp = {
//   type: "native-apps",
//   exact: [haveDirs(["android", "ios"])],
// };

// TODO by npm dep
// const apolloServer = {
//   type: "apollo-server",
//   exact: [hasNpmDeps(["apollo-server-express"])],
// };

// TODO by file pattern
// const javaSpringboot = {
//   type: "spring-boot",
//   exact: [grepFile("pom.xml", "org.springframework.boot")],
// };

// Order matters, more specific above general.
typescript.subtype = [expo, gatsby];
javascript.subtype = [expo, gatsby];
const spec = [typescript, javascript];

const match = (context, defs = spec) => {
  for (const def in defs) {
    const { exact, type, subtype } = defs[def];
    const isMatch = exact.every((match) => match(context));
    if (!isMatch) continue;
    if (!subtype) return type;
    if ((submatch = match(context, subtype))) return `${type}/${submatch}`;
    return type;
  }
};

module.exports = {
  match,
};
