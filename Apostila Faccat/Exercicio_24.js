let salarioFixo = parseFloat(prompt("Digita o salário fixo do vendedor:"));
let totalVendas = parseFloat(prompt("Digita o valor total das vendas efetuadas (R$):"));

let comissao;

if (totalVendas <= 1500) {
    comissao = totalVendas * 0.03; // 3% sobre tudo se não passar de 1500
} else {
    // 3% sobre os primeiros 1500 + 5% sobre o que ultrapassar 1500
    let valorUltrapassado = totalVendas - 1500;
    comissao = (1500 * 0.03) + (valorUltrapassado * 0.05);
}

let salarioTotal = salarioFixo + comissao;

console.log(`O salário total do vendedor é: R$ ${salarioTotal.toFixed(2)}`);
alert(`O salário total do vendedor é: R$ ${salarioTotal.toFixed(2)}`);