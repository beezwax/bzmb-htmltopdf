// const puppeteer = require('puppeteer');
import puppeteer from 'puppeteer';
import fs from 'fs';

export default async function convert (html, options) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  const pdf = await page.pdf(options);
  const buffer = Buffer.from(pdf);
  fs.writeFileSync('test.pdf', buffer);
  const base64String = buffer.toString('base64');
  return base64String;
} 

// module.exports = convert;
