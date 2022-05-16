// Cria um array Multidimensional
let table = new Array(10)

for (let i = 0; i < table.length; i++) {
    table[i] = new Array(10)
}

// Inicializa o Array

for (let row = 0; row < table.length; row++) {
    for (let col = 0; col < table[row].length; col++) {
        table[row][col] = row*col
    }
}

// Usa o array multidimensional para calcular 5*7

let product = table[5][7]

console.log(product)


let arr = [1, -4, 7, 12]

let somados = Math.sign(arr)
let result = 0

for (let i = 0; i < arr.length; i++){
    result += arr[i]
}
console.log(arr)
console.log(result)
console.log(somados)