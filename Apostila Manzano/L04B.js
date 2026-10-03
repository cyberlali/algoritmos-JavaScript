let i = 1;
let soma = 0;

do {
    if (i % 2 === 0) {
        soma += i;
    }
    i++;
} while (i <= 500);

console.log(`O somatório dos números pares de 1 a 500 é: ${soma}`);
alert(`O somatório dos números pares de 1 a 500 é: ${soma}`);