const convertMod = require("./convert.js").then(async function(convert) {
  const pdf = await convert('<!DOCTYPE html><html><body><h1>Hello World</h1></body></html>');
  console.log(pdf);
});
// console.log(convertMod);



// (async () => {
//   const convertModResult = await convertMod(async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.setContent("<!DOCTYPE html><html><body><h1>Hello World</h1></body></html>");
//     const pdf = await page.pdf(undefined);
//     const buffer = Buffer.from(pdf);
//     const base64String = buffer.toString('base64');
//     return base64String;
//     // convert('<!DOCTYPE html><html><body><h1>Hello World</h1></body></html>'))
//   });
//   // console.log(convertModResult);
  
// })()

// convertMod(async function(convert){
//   console.log(convert);
  
//   // const pdf = await convert('<!DOCTYPE html><html><body><h1>Hello World</h1></body></html>');
// })
