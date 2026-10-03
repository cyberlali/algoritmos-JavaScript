let maior, menor;
let primeiro = true;
let valor;

do {
    valor = parseInt(prompt("Digita um inteiro positivo (ou um negativo para parar):"));

    if (valor >= 0) {
        if (primeiro) {
            maior = valor;
            menor = valor;
            primeiro = false;
        } else {
            if (valor > maior) maior = valor;
            if (valor < menor) menor = valor;
        }
    }
} while (valor >= 0);

if (!primeiro) {
    console.log(`Maior valor: ${maior}`);
    console.log(`Menor valor: ${menor}`);
    alert(`Maior valor: ${maior}\nMenor valor: ${menor}`);
} else {
    alert("Nenhum valor válido foi informado.");
}