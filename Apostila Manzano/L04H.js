let areaTotal = 0;
let resposta;

do {
    let nome = prompt("Digita o nome do cômodo:");
    let largura = parseFloat(prompt(`Digita a largura do(a) ${nome} (m):`));
    let comprimento = parseFloat(prompt(`Digita o comprimento do(a) ${nome} (m):`));

    let area = largura * comprimento;
    areaTotal += area;

    console.log(`Área do(a) ${nome}: ${area.toFixed(2)} m²`);
    alert(`Área do(a) ${nome}: ${area.toFixed(2)} m²`);

    resposta = prompt("Desejas continuar calculando novos cômodos? (SIM / NAO)");
} while (resposta.toUpperCase() !== "NAO");

console.log(`Área Total Residencial: ${areaTotal.toFixed(2)} m²`);
alert(`Área total acumulada da residência: ${areaTotal.toFixed(2)} m²`);