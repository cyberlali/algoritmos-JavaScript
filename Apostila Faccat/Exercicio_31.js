let A = parseFloat(prompt("Digita o lado A do triângulo:"));
let B = parseFloat(prompt("Digita o lado B do triângulo:"));
let C = parseFloat(prompt("Digita o lado C do triângulo:"));

// Para formar triângulo, CADA lado deve ser menor que a soma dos outros dois
if (A < B + C && B < A + C && C < A + B) {
    console.log("Os valores FORMAM um triângulo.");
    alert("Os valores FORMAM um triângulo.");
} else {
    console.log("Os valores NÃO FORMAM um triângulo.");
    alert("Os valores NÃO FORMAM um triângulo.");
}