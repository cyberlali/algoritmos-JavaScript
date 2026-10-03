let quantidadeAtual = parseInt(prompt("Digita a quantidade atual em stock:"));
let quantidadeMaxima = parseInt(prompt("Digita a quantidade MÁXIMA permitida no stock:"));
let quantidadeMinima = parseInt(prompt("Digita a quantidade MÍNIMA exigida no stock:"));

let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;

console.log(`Quantidade Média do produto: ${quantidadeMedia}`);

if (quantidadeAtual >= quantidadeMedia) {
    console.log("Não efetuar compra");
    alert(`Stock atual: ${quantidadeAtual} (Média: ${quantidadeMedia})\nDecisão: Não efetuar compra`);
} else {
    console.log("Efetuar compra");
    alert(`Stock atual: ${quantidadeAtual} (Média: ${quantidadeMedia})\nDecisão: Efetuar compra`);
}