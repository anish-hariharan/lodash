var lodash = require("lodash");

console.log(lodash.differenceBy([2.1, 1.2], [2.3, 6.4], Math.floor))

console.log(lodash.differenceBy([{'x': 2}, {'x' : 3}], [{'x': 2}], 'x'))

let names  = [ {"name" :  "anish"}, "shelif", "sam"]

console.log(lodash.differenceBy(names,[{"name" : "anish"}], "name"))