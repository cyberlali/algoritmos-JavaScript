let numCarrosVendidos = parseInt(prompt("Digita o número de carros vendidos pelo funcionário:"));
let valorTotalVendas = parseFloat(prompt("Digita o valor total das vendas efetuadas por ele:"));
let salarioFixo = parseFloat(prompt("Digita o salário fixo mensal do vendedor:"));
let valorPorCarro = parseFloat(prompt("Digita o valor da comissão fixa por cada carro vendido:"));

let comissaoFixaTotal = numCarrosVendidos * valorPorCarro;
let comissaoPercentual = valorTotalVendas * 0.05; // 5% sobre as vendas totais

let salarioFinal = salarioFixo + comissaoFixaTotal + comissaoPercentual;

console.log("--- Fecho do Mês ---");
console.log(`Salário Fixo: R$ ${salarioFixo.toFixed(2)}`);
console.log(`Comissão por Carros: R$ ${comissaoFixaTotal.toFixed(2)}`);
console.log(`Comissão de 5% (Vendas): R$ ${comissaoPercentual.toFixed(2)}`);
console.log(`Salário Final a receber: R$ ${salarioFinal.toFixed(2)}`);

alert(`O salário final do vendedor é: R$ ${salarioFinal.toFixed(2)}`);