// a = [1, 2, 3]

// delete a[0] 
// console.log(a)



let l = [1, 2, 'a', 'b']

let newList = l.filter(element => {
    if (typeof element === 'number') {
        return element
    }
})

console.log(newList)