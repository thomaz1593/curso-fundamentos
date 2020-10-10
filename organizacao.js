console.log("Sentença de códigos");

{
  {
    console.log("Olá");
    console.log("Mundo!"); //Padrão do curso
  }
}

var a = 3;
let b = 4;

var a = 30;
b = 40;

const c = 5;

console.log(a, b, c);

let qualquer = "Legal";
console.log(qualquer);
console.log(typeof qualquer);

qualquer = 3.1597;
console.log(qualquer);
console.log(typeof qualquer);

const peso1 = 1.0;
const peso2 = Number("2.4");

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));
console.log(media.toString(2)); //Converte em binário
console.log((10.325).toFixed(2));

const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);

console.log(area);
