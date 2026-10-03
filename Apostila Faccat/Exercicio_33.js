let num1 = parseFloat(prompt("Digita o 1º valor:"));
let num2 = parseFloat(prompt("Digita o 2º valor:"));

if (num1 === num2) {
    alert("Números iguais");
} else if (num1 > num2) {
    alert("Primeiro é maior");
} else {
    alert("Segundo maior");
}