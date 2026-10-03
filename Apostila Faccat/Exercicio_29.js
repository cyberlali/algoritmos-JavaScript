let v1 = parseFloat(prompt("Digita o 1º valor:"));
let v2 = parseFloat(prompt("Digita o 2º valor (diferente do 1º):"));
let v3 = parseFloat(prompt("Digita o 3º valor (diferente dos anteriores):"));

let soma;

// Se v1 for o menor, somamos v2 e v3
if (v1 < v2 && v1 < v3) {
    soma = v2 + v3;
} 
// Se v2 for o menor, somamos v1 e v3
else if (v2 < v1 && v2 < v3) {
    soma = v1 + v3;
} 
// Se o menor não for v1 nem v2, então v3 é o menor, logo somamos v1 e v2
else {
    soma = v1 + v2;
}

console.log(`A soma dos dois maiores valores é: ${soma}`);
alert(`A soma dos dois maiores valores é: ${soma}`);