// Apresentar valor se não for maior que 3
let valor = parseInt(prompt("Digite um valor inteiro:"));

if (valor <= 3) {
    console.log(`Valor aceito: ${valor}`);
    alert(`Valor aceito: ${valor}`);
} else {
    console.log("O valor digitado é maior que 3.");
}