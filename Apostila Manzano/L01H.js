// Volume de uma caixa retangular
let comprimento = parseFloat(prompt("Digite o comprimento da caixa:"));
let largura = parseFloat(prompt("Digite a largura da caixa:"));
let altura = parseFloat(prompt("Digite a altura da caixa:"));

let volume = comprimento * largura * altura;

console.log(`O volume da caixa é: ${volume.toFixed(2)}`);
alert(`O volume da caixa é: ${volume.toFixed(2)}`);