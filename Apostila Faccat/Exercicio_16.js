let macas = parseInt(prompt("Digita o número de maçãs compradas:"));
let custoTotal;

if (macas < 12) {
    custoTotal = macas * 1.30;
} else {
    custoTotal = macas * 1.00;
}

console.log(`Custo total da compra: R$ ${custoTotal.toFixed(2)}`);
alert(`Custo total da compra: R$ ${custoTotal.toFixed(2)}`);