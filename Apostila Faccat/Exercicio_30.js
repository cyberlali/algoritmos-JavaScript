let v1 = parseFloat(prompt("Digite o 1º valor:"));
let v2 = parseFloat(prompt("Digite o 2º valor (diferente):"));
let v3 = parseFloat(prompt("Digite o 3º valor (diferente):"));

// Vamos testar as 6 combinações possíveis de forma direta usando o "E" (&&)

if (v1 < v2 && v2 < v3) {
    // Exemplo: 1, 2, 3
    alert(`Ordem crescente: ${v1}, ${v2}, ${v3}`);
} 
else if (v1 < v3 && v3 < v2) {
    // Exemplo: 1, 3, 2
    alert(`Ordem crescente: ${v1}, ${v3}, ${v2}`);
} 
else if (v2 < v1 && v1 < v3) {
    // Exemplo: 2, 1, 3
    alert(`Ordem crescente: ${v2}, ${v1}, ${v3}`);
} 
else if (v2 < v3 && v3 < v1) {
    // Exemplo: 2, 3, 1
    alert(`Ordem crescente: ${v2}, ${v3}, ${v1}`);
} 
else if (v3 < v1 && v1 < v2) {
    // Exemplo: 3, 1, 2
    alert(`Ordem crescente: ${v3}, ${v1}, ${v2}`);
} 
else if (v3 < v2 && v2 < v1) {
    // Exemplo: 3, 2, 1
    alert(`Ordem crescente: ${v3}, ${v2}, ${v1}`);
}