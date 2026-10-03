// Módulo de um número (transforma negativo em positivo)
let N = parseInt(prompt("Digite um valor inteiro:"));

if (N < 0) {
    N = N * -1;
}

console.log(`O valor positivo é: ${N}`);
alert(`O valor positivo é: ${N}`);