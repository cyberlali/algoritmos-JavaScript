// Verificar faixa entre 1 e 9
let valor = parseInt(prompt("Digite um valor de 1 a 9:"));

if (valor >= 1 && valor <= 9) {
    console.log("O valor está na faixa permitida.");
    alert("O valor está na faixa permitida.");
} else {
    console.log("O valor está fora da faixa permitida.");
    alert("O valor está fora da faixa permitida.");
}