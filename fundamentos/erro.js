function tratarErroELancar() {
    throw new Error('...')
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }
}

const obj = {nome: 'Roberto' }
imprimirNomeGritado(obj)