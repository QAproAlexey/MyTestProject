const { test , expect } = require ('@playwright/test');
const { MainSite } = require ('..//pageObjects/asos.js');
const { WestWind } = require ('..//pageObjects/west-wind.js');
const { click } = require('../support/helpers.js');
const { file } = require('../files/testFile.js');
test.beforeEach(async ({ page }) => {
  await page.goto('/foo')
});
test.beforeAll (async () => {
  console.log ('Here we go');
});
test.afterEach (async () => {
  console.log ('Test ended');
});
test.afterAll (async () => {
  console.log ('Finished');
  });

test ('SearchNike',async ( { page } ) => {
  const checkSearch = new MainSite (page);
  await checkSearch.searchNike ();
  await checkSearch.resultsMatches ();
});
test ('LoginWithEmptyField', async ( { page } ) => {
  const logInPageEmpty = new MainSite (page);
  await logInPageEmpty.loginPageFun ();
  await logInPageEmpty.checkResult ();
});
test('LoginWithInvalidData', async ( { page } ) => {
  const logInPage = new MainSite (page);
  await logInPage.loginPageOpened ();
  await logInPage.fillWithValidData ();
  await logInPage.checkLoginWithValidData ();
});
test ('UploadFile', async ( { page } ) => {
  await page.goto ('https://west-wind.com/wconnect/wcscripts/FileUpload.wwd')
  const uploadFileWest = new WestWind (page);
  await uploadFileWest.resultImage ();
});
