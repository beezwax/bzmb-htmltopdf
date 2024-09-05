let callback;
let convert;
require('./imports.js').then(([puppeteer]) => {
  convert = async function (html, options) {    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    const pdf = await page.pdf(options);
    const buffer = Buffer.from(pdf);
    const base64String = buffer.toString('base64');
    return base64String;
  };

  if (typeof callback === "function") {
    callback(convert);
  }
});

module.exports = function(cb) {
  if (convert) {
    cb(convert);
  } else {
    callback = cb;
  }
}






// async function convert (html, options) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.setContent(html);
//   const pdf = await page.pdf(options);
//   const buffer = Buffer.from(pdf);
//   const base64String = buffer.toString('base64');
//   return base64String;
// } 

// module.exports = convert;