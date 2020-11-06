const { haveFiles } = require("./inspect");
const { context } = require("./utils/mock");

describe("haveFiles", () => {
  test("matches one file", async () => {
    await expect(await haveFiles(["src/routes/transaction.js"])(context)).toBe(
      true
    );
  });

  test("complex match", async () => {
    await expect(
      await haveFiles([".env", "*.config.js", "**/*.spec.js"])(context)
    ).toBe(true);
  });

  test("fail if any pattern does not match ", async () => {
    await expect(await haveFiles(["**/*.js", "example/test"])(context)).toBe(
      false
    );
  });
});
