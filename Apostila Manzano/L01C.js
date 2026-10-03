// Cálculo do volume de uma lata de óleo
let raio = parseFloat(prompt("Digite o raio da lata:"));
let altura = parseFloat(prompt("Digite a altura da lata:"));

let volume = Math.PI * Math.pow(raio, 2) * altura;

console.log(`O volume da lata é: ${volume.toFixed(2)}`);
alert(`O volume da lata é: ${volume.toFixed(2)}`);