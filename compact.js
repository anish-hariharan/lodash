var lodash = require("lodash");

//it removes the falsey values

let l = [0, 1, false , 2, "", "anish", true]

console.log(lodash.compact(l))