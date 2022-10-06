var lodash = require("lodash");

let str = "Hello";

let split = (str) => { return str.split("") }

lodash.mixin({
    sta: split
})

let arr = lodash.sta(str)

let arr2 = arr.join()

let join = (arr2) => { return arr2.replaceAll(',', '')}

lodash.mixin({
    joining: join
})

console.log(lodash.joining(arr2))
