let a = [5, 4, 3, 2, 1]

let smallvalues = a.filter(e => {
    return e < 3
})

let everyother = a.filter((e, i) => {
    return i % 2 == 0
})

console.log(smallvalues)
console.log(everyother)