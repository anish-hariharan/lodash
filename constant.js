var lodash = require("lodash");

let str = "Hello";

let strFunc = lodash.constant(str);

console.log(str, strFunc())