let custoFabrica = parseFloat(prompt("Digita o custo de fábrica do carro:"));

let percDistribuidor = 0.28; // 28%
let percImpostos = 0.45; // 45%

let valorDistribuidor = custoFabrica * percDistribuidor;
let valorImpostos = custoFabrica * percImpostos;

let custoFinal = custoFabrica + valorDistribuidor + valorImpostos;

console.log(`O custo final do carro ao consumidor é: R$ ${custoFinal.toFixed(2)}`);
alert(`O custo final do carro ao consumidor é: R$ ${custoFinal.toFixed(2)}`);