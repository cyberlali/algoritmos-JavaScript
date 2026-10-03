let i = 50;
let soma = 0;
let contador = 0;

while (i <= 70) {
    if (i % 2 === 0) {
        soma += i;
        contador++;
    }
    i++;
}

let media = soma / contador;

console.log(`Somatório dos pares (50 a 70): ${soma}`);
console.log(`Média dos pares (50 a 70): ${media.toFixed(2)}`);
alert(`Soma: ${soma}\nMédia: ${media.toFixed(2)}`);