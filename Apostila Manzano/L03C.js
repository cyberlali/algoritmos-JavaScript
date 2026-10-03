let i = 1;
let soma = 0;

while (i <= 500) {
    if (i % 2 === 0) {
        soma += i;
    }
    i++;
}

console.log(`Somatório dos pares de 1 até 500: ${soma}`);
alert(`Somatório dos pares de 1 até 500: ${soma}`);