let kgMorango = parseFloat(prompt("Quantos Kg de Morango?"));
let kgMaca = parseFloat(prompt("Quantos Kg de Maçã?"));

let precoMorango = kgMorango <= 5 ? kgMorango * 2.50 : kgMorango * 2.20;
let precoMaca = kgMaca <= 5 ? kgMaca * 1.80 : kgMaca * 1.50;

let valorTotal = precoMorango + precoMaca;
let kgTotal = kgMorango + kgMaca;

if (kgTotal > 8 || valorTotal > 25.00) {
    valorTotal = valorTotal * 0.90; // 10% de desconto
}

console.log(`Valor final da compra: R$ ${valorTotal.toFixed(2)}`);
alert(`Valor final a pagar pelo cliente: R$ ${valorTotal.toFixed(2)}`);