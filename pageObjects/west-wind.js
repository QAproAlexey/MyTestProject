const { expect } = require ('@playwright/test');
exports.WestWind = class WestWind {
  constructor (west) {
    this.west = west;
    this.chooseFileBtn = west.locator ("class=['fileUpload btn btn-primary']");
    this.uploadFileBtn = west.locator ("[class='btn btn-primary']");
    this.uploadedIdFile = west.locator ("[id='filename']")
    this.uploadedFileImage = west.locator ("[class='clearfix margin-bottom']")
  }
//forth test case:
    async chooseFile () {
      await this.chooseFileBtn.click ();
      await this.uploadIdFile.setInputFiles('./files/1.jpeg');
      await this.west.waitForLoadState();
  }
    async uploadFile () {
      await this.uploadFileBtn.click ();
      await this.west.waitForLoadState();
  }
    async resultImage () {
    await expect (this.uploadedFileImage).toBeVisible();
  }
    }