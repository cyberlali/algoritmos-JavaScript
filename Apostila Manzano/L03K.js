let areaTotal = 0;
let resposta = "SIM";

while (resposta.toUpperCase() !== "NAO") {
    let nomeComodo = prompt("Digita o nome do cômodo:");
    let largura = parseFloat(prompt(`Digita a largura do(a) ${nomeComodo} (m):`));
    let comprimento = parseFloat(prompt(`Digita o comprimento do(a) ${nomeComodo} (m):`));

    let areaComodo = largura * comprimento;
    areaTotal += areaComodo;

    console.log(`Área do(a) ${nomeComodo}: ${areaComodo.toFixed(2)} m²`);
    alert(`Área do(a) ${nomeComodo}: ${areaComodo.toFixed(2)} m²`);

    resposta = prompt("Desejas continuar a calcular novos cômodos? (SIM / NAO)");
}

console.log(`Área Total Residencial: ${areaTotal.toFixed(2)} m²`);
alert(`O valor total acumulado da área residencial é: ${areaTotal.toFixed(2)} m²`);