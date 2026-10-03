let n1 = parseFloat(prompt("Digita a nota da 1ª avaliação:"));
let n2 = parseFloat(prompt("Digita a nota da 2ª avaliação:"));

let media = (n1 + n2) / 2;

if (media >= 6) {
    console.log(`Média: ${media.toFixed(2)} - Aluno APROVADO!`);
    alert(`Média: ${media.toFixed(2)} - Aluno APROVADO!`);
} else {
    console.log(`Média: ${media.toFixed(2)} - Aluno NÃO APROVADO!`);
    alert(`Média: ${media.toFixed(2)} - Aluno NÃO APROVADO!`);
}