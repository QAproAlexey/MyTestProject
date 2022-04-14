const { expect } = require ('@playwright/test');
exports.MainSite = class MainSite {
  constructor (page) {
    this.page = page;
    this.searchInput = page.locator ("[class='Cyuazsm _1LCOtZ3 SJwm9Lx']");
    this.searchSubmitBtn = page.locator ("[class='kH5PAAC _1KRfEms']");
    this.searchResultText = page.locator ("[class='vp-JnyG']");
    this.dropdownAccount = page.locator ("[aria-label='My Account']");
    this.loginSubmitBtn = page.locator ("[class='g-recaptcha qa-submit adobeTrackedButton']");
    this.emailValidationFailedHint = page.locator ("[class='qa-email-validation field-validation-error']");
    this.passValidationFailedHint = page.locator ("[class='qa-password-validation field-validation-error']");
    this.emailInput = page.locator ("[class='qa-email-textbox']");
    this.passInput = page.locator ("[class='qa-password-textbox']");
    this.imageLoggedInUser = page.locator ("[class='c7miiU7Q-FOKf36UEPOPu']");
    this.myAccountBtn = page.locator ("[class='yPAUReS IAtMKef _2LRr-ij CjZA9Ep']")
  }
//SearchNike:
    async searchNike () {
      await this.searchInput.fill ('Nike');
      await this.searchSubmitBtn.click ();
      await this.page.waitForLoadState ();
  }
    async resultsMatches () {
    await expect (this.searchResultText).toContainText ('nike');
    
  }
//LoginWithEmptyFields:
  async loginPageFun () {
    await this.dropdownAccount.click ();
    await this.myAccountBtn.click ();
    await this.page.waitForLoadState ();
    await this.loginSubmitBtn.click ();
  }
  async checkResult () {
    await expect (this.emailValidationFailedHint).toContainText ('Oops! You need to type your email here');
    await expect (this.passValidationFailedHint).toContainText ('Hey, we need a password here');
  }
//LoginWithInvalidData:
async loginPageOpened () {
  await this.dropdownAccount.click ();
  await this.myAccountBtn.click ();
  await this.page.waitForLoadState ();
}
async fillWithValidData () {
  await this.emailInput.fill ('testEmail@gmail.com');
  await this.passInput.fill ('testPassword');
  await this.loginSubmitBtn.click ();
}
async checkLoginWithValidData () {
  await expect(this.imageLoggedInUser).toBeVisible ();
}
}