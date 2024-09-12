const test = require("node:test");
const puppeteer = require("puppeteer");
const chromium = require("@sparticuz/chromium");


// Optional: If you'd like to use the new headless mode. "shell" is the default.
// NOTE: Because we build the shell binary, this option does not work.
//       However, this option will stay so when we migrate to full chromium it will work.
chromium.setHeadlessMode = true;

// Optional: If you'd like to disable webgl, true is the default.
chromium.setGraphicsMode = false;

// Optional: Load any fonts you need. Open Sans is included by default in AWS Lambda instances

test("Check the page title of example.com", async (t) => {
  const path = await chromium.executablePath();
  console.log(path);
  
  const browser = await puppeteer.launch({
    // args: chromium.args,
    // defaultViewport: chromium.defaultViewport,
    // executablePath: await chromium.executablePath(),
    // headless: chromium.headless,
  });

  const page = await browser.newPage();
  await page.goto("https://example.com");
  const pageTitle = await page.title();
  console.log(pageTitle);
  
  await browser.close();

  assert.strictEqual(pageTitle, "Example Domain");
});