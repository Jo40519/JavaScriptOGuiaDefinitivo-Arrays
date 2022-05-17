let a = [1, 2, 3, 4, 5]

let b = a.every(e => {
    if (e < 10) {
        return 'Verdadeiro: Todos os valores são menor do que 10'
    }
})

let c = a.every(e => {
    return e % 2 == 0
})

let d = a.some(e => {
    return e % 2 == 0
})

let e = a.some(isNaN)

console.log(b)
console.log(c)
console.log(d)
console.log(e)