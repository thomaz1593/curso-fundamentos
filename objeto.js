const prod1 = {};
prod1.nome = "Celular Ultra Mega";
prod1.preco = 4998.9;
prod1["Desconto Legal"] = 0.4; // evitar usar nome com espaço

console.log(prod1);

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.9,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2,
            teste: "Texto"
        }
    }
};

console.log(prod2);

// par nome/valor
const saudacao = "Opa"; // contexto léxico 1

function exec() {
    const saudacao = "Falaaa!"; // contexto léxico 2
    return saudacao;
}

// Objetos são aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logadouro: "Rua muito legal",
        numero: 123
    }
};

console.log(saudacao);
console.log(exec());
console.log(cliente);

let tes = cliente.nome;
console.log(tes)