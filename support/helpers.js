module.exports = {
  click: async function (locator) {
    await locator.waitFor();
    await locator.click();
  },
};