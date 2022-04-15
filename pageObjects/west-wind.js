const { expect } = require ('@playwright/test');
const { openFile } = require('../support/helpers.js');
const { uploadFile } = require('../support/helpers.js');
exports.WestWind = class WestWind {
  constructor (page) {
    this.page = page;
    this.chooseFileBtn = page.locator ('//*[@id="upload"]');
    this.uploadFileBtn = page.locator ('//*[@type="submit"]');
    this.uploadedFileImage = page.locator ('//*[@id="ImageList"]/img')
  }
//UploadFile:
async resultImage () {
      await uploadFile (this.page, this.chooseFileBtn);
      await openFile (this.uploadFileBtn);
      await this.page.waitForLoadState ();
      await expect (this.uploadedFileImage).toBeVisible ();
   }
}
