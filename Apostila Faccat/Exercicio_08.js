let totalEleitores = parseInt(prompt("Digita o número total de eleitores do município:"));
let brancos = parseInt(prompt("Digita o número de votos em branco:"));
let nulos = parseInt(prompt("Digita o número de votos nulos:"));
let validos = parseInt(prompt("Digita o número de votos válidos:"));

let percBrancos = (brancos / totalEleitores) * 100;
let percNulos = (nulos / totalEleitores) * 100;
let percValidos = (validos / totalEleitores) * 100;

console.log("--- Resultado da Eleição ---");
console.log(`Votos Brancos: ${percBrancos.toFixed(2)}%`);
console.log(`Votos Nulos: ${percNulos.toFixed(2)}%`);
console.log(`Votos Válidos: ${percValidos.toFixed(2)}%`);

alert(`Percentuais:\nBrancos: ${percBrancos.toFixed(2)}%\nNulos: ${percNulos.toFixed(2)}%\nVálidos: ${percValidos.toFixed(2)}%`);