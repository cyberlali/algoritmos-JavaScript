let anterior = 1;
let atual = 1;

console.log("Série de Fibonacci (15 primeiros termos):");
console.log(anterior);
console.log(atual);

let i = 3;
while (i <= 15) {
    let proximo = anterior + atual;
    console.log(proximo);
    anterior = atual;
    atual = proximo;
    i++;
}

alert("Série de Fibonacci exibida na consola (F12).");