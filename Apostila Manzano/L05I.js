let anterior = 1;
let atual = 1;

console.log("Série de Fibonacci (15 primeiros termos):");
console.log(anterior);
console.log(atual);

for (let i = 3; i <= 15; i++) {
    let proximo = anterior + atual;
    console.log(proximo);
    anterior = atual;
    atual = proximo;
}

alert("Série de Fibonacci exibida no console (F12)!");