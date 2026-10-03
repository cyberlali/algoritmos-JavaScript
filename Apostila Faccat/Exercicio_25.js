let numeroConta = prompt("Digita o número da conta do cliente:");
let saldo = parseFloat(prompt("Digita o saldo da conta:"));
let debito = parseFloat(prompt("Digita o valor do débito:"));
let credito = parseFloat(prompt("Digita o valor do crédito:"));

let saldoAtual = saldo - debito + credito;

console.log(`Conta: ${numeroConta} | Saldo Atual: R$ ${saldoAtual.toFixed(2)}`);

if (saldoAtual >= 0) {
    console.log("Saldo Positivo");
    alert(`Conta: ${numeroConta}\nSaldo Atual: R$ ${saldoAtual.toFixed(2)}\nSituação: Saldo Positivo`);
} else {
    console.log("Saldo Negativo");
    alert(`Conta: ${numeroConta}\nSaldo Atual: R$ ${saldoAtual.toFixed(2)}\nSituação: Saldo Negativo`);
}