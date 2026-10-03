let C = 10;

console.log("Tabela de Conversão (°C para °F):");

while (C <= 100) {
    let F = (9 * C + 160) / 5;
    console.log(`${C}°C equivalem a ${F}°F`);
    C += 10;
}

alert("Tabela de conversão exibida na consola (F12).");