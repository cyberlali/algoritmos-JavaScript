let soma = 0;
let total = 0;
let valor;

do {
    valor = parseFloat(prompt("Digita um número positivo (ou um negativo para encerrar):"));

    if (valor >= 0) {
        soma += valor;
        total++;
    }
} while (valor >= 0);

if (total > 0) {
    let media = soma / total;
    console.log(`Total de valores lidos: ${total}`);
    console.log(`Somatório: ${soma}`);
    console.log(`Média Aritmética: ${media.toFixed(2)}`);

    alert(`Total lidos: ${total}\nSomatório: ${soma}\nMédia: ${media.toFixed(2)}`);
} else {
    alert("Nenhum valor positivo foi fornecido.");
}