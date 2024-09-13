const { join } = require("path");
process.env["PUPPETEER_CACHE_DIR"] = join(__dirname, ".cache", "puppeteer");

const puppeteer = require("puppeteer");

async function convert (html, options) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  const pdf = await page.pdf(options);
  await browser.close();
  const buffer = Buffer.from(pdf);
  const base64String = buffer.toString('base64');
  return base64String;
}

module.exports = convert;