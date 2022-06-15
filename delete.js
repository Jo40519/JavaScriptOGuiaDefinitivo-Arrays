// a = [1, 2, 3]

// delete a[0]
// console.log(a)



// let l = [1, 2, 'a', 'b']

// let newList = l.filter(element => {
//     if (typeof element === 'number') {
//         return element
//     }
// })

// console.log(newList)


// function friend(friends = []) {
//     let arr = friends.filter((element, i) => {
//         if (element.length == 4) {
//             return element
//         }
//     })
//     return arr
// }

// console.log(friend(["Ryan", "Kieran", "Mark"]))

let numbers = 12
let arr = [1, 5].sort((a, b) => {
    return b - a
}).join('')
let num = Number(arr)
console.log(num)
console.log(arr)