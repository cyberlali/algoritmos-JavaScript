let v1 = parseFloat(prompt("Digita o 1º valor:"));
let v2 = parseFloat(prompt("Digita o 2º valor (diferente do 1º):"));
let v3 = parseFloat(prompt("Digita o 3º valor (diferente dos anteriores):"));

let maior;

// Verifica se o v1 é maior que os outros dois
if (v1 > v2 && v1 > v3) {
    maior = v1;
} 
// Se o v1 não é o maior, verifica se o v2 é o maior
else if (v2 > v3) {
    maior = v2;
} 
// Se não é o v1 nem o v2, só pode ser o v3
else {
    maior = v3;
}

console.log(`O maior valor informado é: ${maior}`);
alert(`O maior valor informado é: ${maior}`);