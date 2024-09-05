const convertMod = require("./convert.js");

convertMod(async function(convert){
  const pdf = await convert('<!DOCTYPE html><html><body><h1>Hello World</h1></body></html>');
  console.log(pdf);
  return;
});