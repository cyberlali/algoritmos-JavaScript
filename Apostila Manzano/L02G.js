// Números divisíveis por 2 e por 3
let n1 = parseInt(prompt("Digite o 1º número inteiro:"));
let n2 = parseInt(prompt("Digite o 2º número inteiro:"));
let n3 = parseInt(prompt("Digite o 3º número inteiro:"));
let n4 = parseInt(prompt("Digite o 4º número inteiro:"));

let numeros = [n1, n2, n3, n4];

console.log("Divisíveis por 2 e por 3:");
for (let num of numeros) {
    if (num % 2 === 0 && num % 3 === 0) {
        console.log(num);
    }
}
alert("Abra o console (F12) para visualizar os números válidos.");