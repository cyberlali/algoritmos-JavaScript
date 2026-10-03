let horaInicio = parseInt(prompt("Digita a hora de início do jogo (0 a 23):"));
let horaFim = parseInt(prompt("Digita a hora de fim do jogo (0 a 23):"));

let duracao = horaFim - horaInicio;

// Se a duração for menor ou igual a 0, significa que o jogo virou o dia (passou da meia-noite)
if (duracao <= 0) {
    duracao = duracao + 24;
}

console.log(`A duração do jogo foi de ${duracao} hora(s).`);
alert(`A duração do jogo foi de ${duracao} hora(s).`);