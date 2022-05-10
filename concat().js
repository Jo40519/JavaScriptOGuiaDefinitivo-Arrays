let a = [1, 2, 3];

let b = a.concat(4, 5)
console.log(b)

let c = a.concat([4, 5])

console.log(c)

let d = a.concat([4, 5], [6, 7])
console.log(d)
let e = a.concat(4, [5, [6, 7]])

console.log(e)