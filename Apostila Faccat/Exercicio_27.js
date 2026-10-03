let valor = parseFloat(prompt("Digita um valor:"));

if (valor > 0) {
    console.log("O valor é POSITIVO.");
    alert("O valor é POSITIVO.");
} else if (valor < 0) {
    console.log("O valor é NEGATIVO.");
    alert("O valor é NEGATIVO.");
} else {
    // Se não é maior nem menor que zero, só pode ser zero.
    console.log("O valor é ZERO.");
    alert("O valor é ZERO.");
}