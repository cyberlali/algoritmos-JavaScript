// Diferença do maior pelo menor valor
let A = parseInt(prompt("Digite o valor de A:"));
let B = parseInt(prompt("Digite o valor de B:"));

let diferenca;

if (A > B) {
    diferenca = A - B;
} else {
    diferenca = B - A;
}

console.log(`A diferença do maior pelo menor é: ${diferenca}`);
alert(`A diferença do maior pelo menor é: ${diferenca}`);