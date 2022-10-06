var lodash = require("lodash");

let object = [{'x' : 1, 'y' : 2}, { 'x' : 3, 'y' : 4}];

console.log(lodash.differenceWith(object, [{ 'x' : 1, 'y' : 2}], lodash.isEqual))


