// Três valores em ordem crescente
let A = parseFloat(prompt("Digite o primeiro valor (A):"));
let B = parseFloat(prompt("Digite o segundo valor (B):"));
let C = parseFloat(prompt("Digite o terceiro valor (C):"));

let aux;

if (A > B) { aux = A; A = B; B = aux; }
if (A > C) { aux = A; A = C; C = aux; }
if (B > C) { aux = B; B = C; C = aux; }

console.log(`Valores em ordem crescente: ${A}, ${B}, ${C}`);
alert(`Valores em ordem crescente: ${A}, ${B}, ${C}`);