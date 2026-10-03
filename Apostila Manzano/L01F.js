// Troca de valores entre variáveis
let A = prompt("Digite o valor de A:");
let B = prompt("Digite o valor de B:");

let aux = A;
A = B;
B = aux;

console.log(`Valores trocados -> A: ${A} | B: ${B}`);
alert(`Valores trocados -> A: ${A} | B: ${B}`);