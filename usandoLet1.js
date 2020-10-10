var numero = 1

{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

//let em Loop
for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i =', i) //Exibi erro pois não está no mesmo bloco

const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()