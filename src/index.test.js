const { match } = require("./index");
const { haveFiles } = require("./inspect");
const mock = require("./utils/mock");

test("test file based matchers", async () => {
  const { js, ts, expo } = mock;
  await expect(match({ files: [].concat(js) })).toBe("javascript");
  await expect(match({ files: [].concat(js, ts) })).toBe("typescript");
  await expect(match({ files: [].concat(js, expo) })).toBe("javascript/expo");
  await expect(match({ files: [].concat(js, ts, expo) })).toBe(
    "typescript/expo"
  );
});
