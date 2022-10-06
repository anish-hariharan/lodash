var lodash = require("lodash");

let  l = [1, 2, 3, 4, 5, 6];

console.log(lodash.reject(l, (ele) => {return ele %2 == 0 } ))