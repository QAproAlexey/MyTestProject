const { expect } = require ('@playwright/test');
const { openFile } = require('../support/helpers.js');
const { uploadFile } = require('../support/helpers.js');
exports.WestWind = class WestWind {
  constructor (page) {
    this.page = page;
    this.chooseFileBtn = page.locator ('form[action="FileUpload.wwd"] [class="fileUpload btn btn-primary"]');
    this.uploadFileBtn = page.locator ('form[action="FileUpload.wwd"] [class="btn btn-primary"]');
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
//done