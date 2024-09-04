// const convert = require("./convert.js");
import convert from "./convert.js";
const pdf = await convert('<!DOCTYPE html><html><body><h1>Hello World</h1></body></html>');
console.log(pdf);