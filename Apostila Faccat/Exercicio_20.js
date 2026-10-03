let v1 = parseFloat(prompt("Digita o 1º valor:"));
let v2 = parseFloat(prompt("Digita o 2º valor (diferente do 1º):"));

if (v1 < v2) {
    console.log(`Ordem crescente: ${v1}, ${v2}`);
    alert(`Ordem crescente: ${v1}, ${v2}`);
} else {
    console.log(`Ordem crescente: ${v2}, ${v1}`);
    alert(`Ordem crescente: ${v2}, ${v1}`);
}