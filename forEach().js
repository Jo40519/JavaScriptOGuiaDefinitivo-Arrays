let data = [1, 2, 3, 4, 5]
let sum = 0;
let forEach = data.forEach(element => {
    sum += element
})

console.log(sum)

let forEach2 = data.forEach((v, i, a) => {
    a[i] = v + 1
})

console.log(data)