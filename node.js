// const https = require('https');
// const API = 'https://jsonplaceholder.typicode.com/user?_limit=2'
// https.get(API, res => {
//     console.log(res.statusCode)
// })

// console.log('Conectando API')

let str = "How can mirrors be real if our eyes aren\'t real"
let arr = str.split(' ').map(frase => {
    return frase[0].toUpperCase() + 
    frase.toLocaleLowerCase().slice(1)
})
let junto = arr.join(' ').replace(/'\'/g, '')
    
console.log(junto)