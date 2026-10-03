let v1 = parseFloat(prompt("Digita o 1º valor:"));
let v2 = parseFloat(prompt("Digita o 2º valor (diferente do 1º):"));

if (v1 > v2) {
    console.log(`O maior valor é: ${v1}`);
    alert(`O maior valor é: ${v1}`);
} else {
    console.log(`O maior valor é: ${v2}`);
    alert(`O maior valor é: ${v2}`);
}