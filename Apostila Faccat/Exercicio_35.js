let litros = parseFloat(prompt("Quantos litros foram vendidos?"));
let tipo = prompt("Tipo de combustível (A - Álcool / G - Gasolina):").toUpperCase();

let precoTotal = 0;

if (tipo === 'A') {
    let precoLitro = 2.90;
    if (litros <= 20) {
        precoTotal = (litros * precoLitro) * 0.97; // 3% de desconto
    } else {
        precoTotal = (litros * precoLitro) * 0.95; // 5% de desconto
    }
    alert(`Combustível: Álcool\nValor a pagar: R$ ${precoTotal.toFixed(2)}`);
} else if (tipo === 'G') {
    let precoLitro = 3.30;
    if (litros <= 20) {
        precoTotal = (litros * precoLitro) * 0.96; // 4% de desconto
    } else {
        precoTotal = (litros * precoLitro) * 0.94; // 6% de desconto
    }
    alert(`Combustível: Gasolina\nValor a pagar: R$ ${precoTotal.toFixed(2)}`);
} else {
    alert("Tipo de combustível inválido!");
}