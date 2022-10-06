var lodash = require("lodash");

let l = [3, 9, 2]

let isEven = (num) => {
    return num %2 == 0
}

console.log(lodash.some(l, isEven))