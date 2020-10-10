{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

// teste()
// console.log(local)

var numero = 1

{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// var em Loop

for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i =', i)

const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()