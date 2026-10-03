// Média de 4 notas (Aprovação com média >= 5)
let n1 = parseFloat(prompt("Digite a 1ª nota:"));
let n2 = parseFloat(prompt("Digite a 2ª nota:"));
let n3 = parseFloat(prompt("Digite a 3ª nota:"));
let n4 = parseFloat(prompt("Digite a 4ª nota:"));

let media = (n1 + n2 + n3 + n4) / 4;

if (media >= 5) {
    console.log(`Média: ${media.toFixed(2)} - APROVADO!`);
    alert(`Média: ${media.toFixed(2)} - APROVADO!`);
} else {
    console.log(`Média: ${media.toFixed(2)} - REPROVADO!`);
    alert(`Média: ${media.toFixed(2)} - REPROVADO!`);
}