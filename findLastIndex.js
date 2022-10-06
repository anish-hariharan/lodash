var lodash = require("lodash");

let l = [1, 2, 3, 4, 8, 8, 8]

console.log(lodash.findLastIndex(l, (ele) => {
    return ele == 8
}))