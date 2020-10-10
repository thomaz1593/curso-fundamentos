// novo recurso no JavaScript 2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logadouro: 'Rua ABC',
        numero: 1000
    }
}

const {
    nome,
    idade
} = pessoa
console.log(nome, idade)

const {
    nome: n,
    idade: i
} = pessoa
console.log(n, i)

const {
    sobrenome,
    bemHumorada = true
} = pessoa
console.log(sobrenome, bemHumorada)

const {
    endereco: {
        logadouro,
        numero,
        cep
    }
} = pessoa
console.log(logadouro, numero, cep)

// const {
//     conta: {
//         ag,
//         num
//     }
// } = pessoa
// console.log(ag, num)  // Vai dar erro pois o campo conta não existe, muito menos os valores ag e num

// Destructuring em array
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [
    [, 8, 8],
    [9, 6, 8]
]
console.log(nota)


// Destructuring em objeto via função
function rand({
    min = 0,
    max = 1000
}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {
    max: 50,
    min: 40
}
console.log(rand(obj))
console.log(rand({
    min: 955
}))
console.log(rand({}))
console.log(rand())

// Destructuring em array via função
function rand([min = 0, max = 1000]) {
    if (min > max)[min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10])) // valor mínimo zero, máximo 10
console.log(rand([])) // valores padrões, entre zero e 1000
console.log(rand()) // vai dar erro pois está vazio, valor undefined