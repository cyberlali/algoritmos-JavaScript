let x = parseFloat(prompt("Valor de X:"));
let y = parseFloat(prompt("Valor de Y:"));

let z = (x * y) + 5;
let resposta;

if (z <= 0) {
    resposta = 'A';
} else if (z <= 100) {
    resposta = 'B';
} else {
    resposta = 'C';
}

console.log(`Z = ${z}, Resposta = ${resposta}`);
alert(`Resultado do Teste:\nZ = ${z}\nResposta = ${resposta}`);