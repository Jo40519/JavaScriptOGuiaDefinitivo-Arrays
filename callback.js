function sayMyName(name) {
    name()
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)

function imprimirDado(dado) {
    console.log(dado())
}

imprimirDado(function () {
    return 'Olá Mundo'
})