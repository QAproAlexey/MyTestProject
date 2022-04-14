const { expect } = require ('@playwright/test');
const { openFile } = require('../support/helpers.js');
const { uploadFile } = require('../support/helpers.js');
exports.WestWind = class WestWind {
  constructor (page) {
    this.page = page;
    this.chooseFileBtn = page.locator ("[class='fa fa-image']");
    this.uploadFileBtn = page.locator ("[class='btn btn-primary']");
    this.uploadedFileImage = page.locator ("[id='ImageList']")
  }
//UploadFileWest:
async resultImage () {
      await uploadFile (this.page, this.chooseFileBtn);
      await openFile (this.uploadFileBtn);
      await this.page.waitForLoadState ();
      await expect (this.uploadedFileImage).toBeVisible ();
   }
}