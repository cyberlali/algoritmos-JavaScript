let i = 1;
let soma = 0;

while (i <= 10) {
    let valor = parseFloat(prompt(`Digita o ${i}º valor:`));
    soma += valor;
    i++;
}

let media = soma / 10;

console.log(`Somatório: ${soma}`);
console.log(`Média Aritmética: ${media.toFixed(2)}`);
alert(`Somatório: ${soma}\nMédia Aritmética: ${media.toFixed(2)}`);