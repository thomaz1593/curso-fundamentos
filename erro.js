function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('finalmente')
    }
}

function tratarErroELancar(erro) {
    // throw new Error('Ocorreu um erro')
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

const obj = {
    nome: 'Roberto'
}
imprimirNomeGritado(obj)