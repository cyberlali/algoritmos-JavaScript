// Apuração de eleição sindical
let candA = parseInt(prompt("Quantidade de votos válidos do Candidato A:"));
let candB = parseInt(prompt("Quantidade de votos válidos do Candidato B:"));
let candC = parseInt(prompt("Quantidade de votos válidos do Candidato C:"));
let nulos = parseInt(prompt("Quantidade de votos nulos:"));
let brancos = parseInt(prompt("Quantidade de votos em branco:"));

let validos = candA + candB + candC;
let totalEleitores = validos + nulos + brancos;

console.log(`Total de Eleitores: ${totalEleitores}`);
console.log(`Percentual de Votos Válidos: ${((validos / totalEleitores) * 100).toFixed(2)}%`);
console.log(`Percentual Candidato A: ${((candA / totalEleitores) * 100).toFixed(2)}%`);
console.log(`Percentual Candidato B: ${((candB / totalEleitores) * 100).toFixed(2)}%`);
console.log(`Percentual Candidato C: ${((candC / totalEleitores) * 100).toFixed(2)}%`);
console.log(`Percentual Nulos: ${((nulos / totalEleitores) * 100).toFixed(2)}%`);
console.log(`Percentual Brancos: ${((brancos / totalEleitores) * 100).toFixed(2)}%`);

alert(`Eleição Apurada! Confira o detalhamento completo no console (F12).`);