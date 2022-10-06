var lodash = require("lodash");

let l = [1, 3, 3, 4, 5, 6]

console.log(lodash.findIndex(l, (ele) => {
    return ele == 3
}))