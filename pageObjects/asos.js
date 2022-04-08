const { expect } = require ('@playwright/test');
exports.MainSite = class MainSite {
  constructor (page) {
    this.page = page;
    this.searchInput = page.locator ("[class='Cyuazsm _1LCOtZ3 SJwm9Lx']");
    this.searchSubmitBtn = page.locator ("[class='kH5PAAC _1KRfEms']");
    this.searchResultText = page.locator ("[aria-hidden='true']");
    this.searchResultProductsMatches = page.locator ("[class='_3TqU78D']");
    this.dropdownAccount = page.locator ("[aria-label='My Account']");
    this.loginSubmitBtn = page.locator ("[class='g-recaptcha qa-submit adobeTrackedButton']");
    this.emailValidationFailedHint = page.locator ("[class='qa-email-validation field-validation-error']");
    this.passValidationFailedHint = page.locator ("[class='qa-password-validation field-validation-error']");
    this.emailInput = page.locator ("[class='qa-email-textbox']");
    this.passInput = page.locator ("[class='qa-password-textbox']");
    this.imageLoggedInUser = page.locator ("[class='c7miiU7Q-FOKf36UEPOPu']");
    this.myAccountBtn = page.locator ("[class='yPAUReS IAtMKef _2LRr-ij CjZA9Ep']")
  }
//first test case:
    async searchNike () {
      await this.searchInput.fill ('Nike');
      await this.searchSubmitBtn.click ();
      await this.page.waitForLoadState();
  }
    async resultsMatches () {
    await expect (this.searchResultText).toContainText ('Nike');
    await expect (this.searchResultProductsMatches).toContainText ('Nike');
  }
//second test case:
  async loginPageFun () {
    await this.dropdownAccount.click ();
    await this.myAccountBtn.click ();
    await this.page.waitForLoadState();
    await this.loginSubmitBtn.click ();
  }
  async checkResult () {
    await expect (this.emailValidationFailedHint).toContainText ('Oops! You need to type your email here');
    await expect (this.passValidationFailedHint).toContainText ('Hey, we need a password here');
  }
//third test case:
async loginPageOpened () {
  await this.dropdownAccount.click ();
  await this.myAccountBtn.click ();
  await this.page.waitForLoadState();
}
async fillWithValidData () {
  await this.emailInput.fill ('testEmail@gmail.com');
  await this.passInput.fill ('testPassword');
  await this.loginSubmitBtn.click ();
}
async checkLoginWithValidData () {
  await expect(this.imageLoggedInUser).toBeVisible ();
}
//fifth test case:
async loginPageOpened () {
  await this.dropdownAccount.click ();
  await this.myAccountBtn.click ();
  await this.page.waitForLoadState();
}
async fillWithValidData () {
  await this.emailInput.fill ('oleksiy.illiashenko@titanium-tech.net');
  await this.passInput.fill ('Qwerty12345');
  await this.loginSubmitBtn.click ();
}
async checkLoginWithValidData () {
  await expect(this.imageLoggedInUser).toBeVisible ();
}
}