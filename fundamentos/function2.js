// Armazenando uma funçao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(23,  34));

// retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(264.3 ,  9))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')