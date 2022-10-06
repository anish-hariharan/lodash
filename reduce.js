var lodash = require("lodash");

let l = [1, 2, 3, 4]

console.log(lodash.reduce(l, (sum,num) => {
    return sum + num
}))