// Maior e menor valor entre 5 inteiros
let maior, menor;

for (let i = 1; i <= 5; i++) {
    let valor = parseInt(prompt(`Digite o ${i}º número inteiro:`));

    if (i === 1) {
        maior = valor;
        menor = valor;
    } else {
        if (valor > maior) maior = valor;
        if (valor < menor) menor = valor;
    }
}

console.log(`Maior: ${maior} | Menor: ${menor}`);
alert(`Maior valor: ${maior}\nMenor valor: ${menor}`);