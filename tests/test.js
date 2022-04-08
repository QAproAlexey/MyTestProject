const { test , expect } = require ('@playwright/test');
const { MainSite } = require ('..//pageObjects/asos.js');
const { WestWind } = require ('..//pageObjects/west-wind.js');
const BASE_URL = process.env.URL;

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

test ('first test case',async ( { page } )=> {
  const checkSearch = new MainSite (page);
  await checkSearch.searchNike ();
  await checkSearch.resultsMatches();
});
test ('second test case', async ( { page } ) => {
  const logInPageEmpty = new MainSite (page);``
  await logInPageEmpty.loginPageFun ();
  await logInPageEmpty.checkResult ();
});
test('third test case', async ( { page } ) => {
  const logInPage = new MainSite (page);
  await logInPage.loginPageOpened ();
  await logInPage.fillWithValidData ();
  await logInPage.checkLoginWithValidData ();
});
test ('forth test case', async ( { page } )=> {
  await west.goto('https://west-wind.com/wconnect/wcscripts/FileUpload.wwd')
  const openedWestWind = new WestWind (west);
  await openedWestWind.chooseFile ();
  await openedWestWind.uploadFile ();
  await openedWestWind.resultImage ();
});
