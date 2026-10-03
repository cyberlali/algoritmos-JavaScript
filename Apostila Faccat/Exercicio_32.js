let time1 = prompt("Digita o nome da 1ª equipa:");
let gols1 = parseInt(prompt(`Quantos golos marcou o(a) ${time1}?`));

let time2 = prompt("Digita o nome da 2ª equipa:");
let gols2 = parseInt(prompt(`Quantos golos marcou o(a) ${time2}?`));

if (gols1 > gols2) {
    alert(`O VENCEDOR É: ${time1}`);
} else if (gols2 > gols1) {
    alert(`O VENCEDOR É: ${time2}`);
} else {
    alert("O jogo terminou em EMPATE.");
}