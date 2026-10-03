// Cálculo de prestação em atraso
let valor = parseFloat(prompt("Digite o valor original da prestação:"));
let taxa = parseFloat(prompt("Digite a taxa de juros (%):"));
let tempo = parseFloat(prompt("Digite o tempo de atraso (meses/dias):"));

let prestacao = valor + (valor * (taxa / 100) * tempo);

console.log(`O valor da prestação em atraso é: R$ ${prestacao.toFixed(2)}`);
alert(`O valor da prestação em atraso é: R$ ${prestacao.toFixed(2)}`);