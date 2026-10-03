let contador = 1;
let somatorioFatorial = 0;

do {
    let valor = parseInt(prompt(`Digita o ${contador}º valor inteiro:`));

    // Cálculo do fatorial do valor lido
    let fat = 1;
    let j = 1;
    if (valor > 0) {
        do {
            fat *= j;
            j++;
        } while (j <= valor);
    }

    somatorioFatorial += fat;
    contador++;
} while (contador <= 15);

console.log(`O somatório dos fatoriais é: ${somatorioFatorial}`);
alert(`O somatório dos fatoriais dos 15 valores é: ${somatorioFatorial}`);