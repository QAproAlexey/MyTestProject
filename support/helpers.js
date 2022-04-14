const { expect } = require ('@playwright/test');
const { file } = require ('../files/testFile.js');
module.exports = {
  openFile: async function (locator) {
    await locator.waitFor ();
    await locator.click ();
  },
  uploadFile: async function (page, locator) {
    const [fileChooser] = await Promise.all ([
      page.waitForEvent ('filechooser'),
      await locator.click ()
    ]);
    await fileChooser.setFiles (file);
  }
};