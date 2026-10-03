// Conversão de Dólar para Real
let cotacao = parseFloat(prompt("Digite a cotação do Dólar (R$):"));
let qtdDolar = parseFloat(prompt("Digite a quantidade de Dólares (US$):"));

let valorReal = qtdDolar * cotacao;

console.log(`US$ ${qtdDolar.toFixed(2)} equivalem a R$ ${valorReal.toFixed(2)}`);
alert(`US$ ${qtdDolar.toFixed(2)} equivalem a R$ ${valorReal.toFixed(2)}`);