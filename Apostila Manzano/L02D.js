// Média de 4 notas com Exame de Recuperação
let n1 = parseFloat(prompt("Digite a 1ª nota:"));
let n2 = parseFloat(prompt("Digite a 2ª nota:"));
let n3 = parseFloat(prompt("Digite a 3ª nota:"));
let n4 = parseFloat(prompt("Digite a 4ª nota:"));

let media1 = (n1 + n2 + n3 + n4) / 4;

if (media1 >= 7) {
    console.log(`Média: ${media1.toFixed(2)} - APROVADO!`);
    alert(`Média: ${media1.toFixed(2)} - APROVADO!`);
} else {
    let notaExame = parseFloat(prompt(`Média ${media1.toFixed(2)}. Digite a nota do exame:`));
    let media2 = (media1 + notaExame) / 2;

    if (media2 >= 5) {
        console.log(`Média com Exame: ${media2.toFixed(2)} - APROVADO EM EXAME!`);
        alert(`Média com Exame: ${media2.toFixed(2)} - APROVADO EM EXAME!`);
    } else {
        console.log(`Média com Exame: ${media2.toFixed(2)} - REPROVADO!`);
        alert(`Média com Exame: ${media2.toFixed(2)} - REPROVADO!`);
    }
}