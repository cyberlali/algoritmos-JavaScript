let soma = 0;

for (let i = 1; i <= 500; i++) {
    if (i % 2 === 0) {
        soma += i;
    }
}

console.log(`Somatório dos pares de 1 a 500: ${soma}`);
alert(`Somatório dos pares de 1 a 500: ${soma}`);