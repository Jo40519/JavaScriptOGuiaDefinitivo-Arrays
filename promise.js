let aceitar = true

const promessa = new Promise((resolve, reject) => {
    if (!aceitar) {
        return resolve('O carro chegou')
    } else {
        return reject('Pedido negado')
    }
})

console.log('Aguardando')

promessa.then(result => {
    console.log(result)
}).catch(erro => {
    console.log(erro)
})