const convert = require("./convert.js");
const fs = require("fs");

(async() => {
  const pdf = await convert('<!DOCTYPE html><html><body><h1>Hello World</h1></body></html>');
  console.log(pdf);
  fs.writeFileSync("test.pdf", Buffer.from(pdf, "base64"));
})();