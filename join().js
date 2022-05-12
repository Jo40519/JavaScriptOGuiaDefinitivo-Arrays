let a = [1, 2, 3];

let join = a.join() //"1, 2, 3"

let joinDois = a.join(' ') //"1 2 3 "

let joinTres = a.join('') //"123"

let b = new Array(10) // Um array de comprimento 10 sem elementos

let joinQuatro = b.join('-') // '---------' Uma string com 9 hifens

console.log(join)

console.log(joinDois)

console.log(joinTres)

console.log(joinQuatro)