let n1 = parseFloat(prompt("Digite a 1ª nota do aluno (peso 2):"));
let n2 = parseFloat(prompt("Digite a 2ª nota do aluno (peso 3):"));
let n3 = parseFloat(prompt("Digite a 3ª nota do aluno (peso 5):"));

let mediaFinal = (n1 * 2 + n2 * 3 + n3 * 5) / 10;

console.log(`A média final ponderada do aluno é: ${mediaFinal.toFixed(2)}`);
alert(`A média final ponderada do aluno é: ${mediaFinal.toFixed(2)}`);