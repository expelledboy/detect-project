const picomatch = require("picomatch");

const haveFiles = (patterns) => {
  const matchers = patterns.map((pattern) => ({
    pattern,
    isMatch: picomatch(pattern),
  }));

  return (context) => {
    for (const matcher in matchers) {
      if (context.files.find((file) => matchers[matcher].isMatch(file)))
        continue;
      return false;
    }
    return true;
  };
};

module.exports = {
  haveFiles,
};
