var lodash = require("lodash");

let l = [1, 2, ,3 ,4 ,8, 9];

console.log(lodash.filter(l, (ele) => {return ele %2 == 0 }))
