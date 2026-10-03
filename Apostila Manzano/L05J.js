console.log("Tabela de Conversão (°C para °F):");

for (let C = 10; C <= 100; C += 10) {
    let F = (9 * C + 160) / 5;
    console.log(`${C}°C equivalem a ${F}°F`);
}

alert("Tabela de temperaturas exibida no console (F12).");