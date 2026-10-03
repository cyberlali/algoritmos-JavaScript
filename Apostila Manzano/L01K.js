// Conversão de Real para Dólar
let cotacao = parseFloat(prompt("Digite a cotação do Dólar (R$):"));
let qtdReal = parseFloat(prompt("Digite a quantidade de Reais (R$):"));

let valorDolar = qtdReal / cotacao;

console.log(`R$ ${qtdReal.toFixed(2)} equivalem a US$ ${valorDolar.toFixed(2)}`);
alert(`R$ ${qtdReal.toFixed(2)} equivalem a US$ ${valorDolar.toFixed(2)}`);