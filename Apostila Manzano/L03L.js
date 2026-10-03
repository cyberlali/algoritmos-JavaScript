let maior, menor;
let primeiroAcesso = true;
let valor = 0;

while (valor >= 0) {
    valor = parseInt(prompt("Digita um número inteiro positivo (ou um negativo para parar):"));

    if (valor >= 0) {
        if (primeiroAcesso) {
            maior = valor;
            menor = valor;
            primeiroAcesso = false;
        } else {
            if (valor > maior) maior = valor;
            if (valor < menor) menor = valor;
        }
    }
}

if (!primeiroAcesso) {
    console.log(`Maior valor: ${maior}`);
    console.log(`Menor valor: ${menor}`);
    alert(`Maior valor informado: ${maior}\nMenor valor informado: ${menor}`);
} else {
    alert("Nenhum valor válido foi informado.");
}