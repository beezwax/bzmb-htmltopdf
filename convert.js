const puppeteer = require("puppeteer");

async function convert (html, options) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  const pdf = await page.pdf(options);
  const buffer = Buffer.from(pdf);
  const base64String = buffer.toString('base64');
  return base64String;
} 

module.exports = convert;

// let callback;
// let convert;
// require('./imports.js').then(([puppeteer]) => {
//   convert = async function (html, options) {    
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.setContent(html);
//     const pdf = await page.pdf(options);
//     const buffer = Buffer.from(pdf);
//     const base64String = buffer.toString('base64');
//     return base64String;
//   };

//   if (typeof callback === "function") {
//     callback(convert);
//   }
// });

// module.exports = async function(cb) {
//   if (convert) {
//     const convertResult = await cb(convert);
//     return convertResult;
//   } else {
//     callback = cb;
//   }
// }

// let convert;
// module.exports = new Promise(async function (resolve, reject) {
//   console.log("about to require imports");
//   return require('./imports.js')
//     .then(([puppeteer]) => {
//       convert = async function (html, options) {
//         console.log("setting browser");
//         const browser = await puppeteer.launch();
//         console.log("setting page");
//         const page = await browser.newPage();
//         await page.setContent(html);
//         console.log("setting pdf");
//         const pdf = await page.pdf(options);
//         const buffer = Buffer.from(pdf);
//         const base64String = buffer.toString('base64');
//         console.log(base64String);
        
//         return base64String;
//       };
//       resolve(convert);
//     })
//     .catch((error) => {
//       console.log(`error type: ${typeof error}`);
//       console.log(`error message: ${error.message}`);
//       reject(error);
//     })
// })






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