let pot = 1;

console.log("Potências de 3 (expoentes 0 a 15):");

for (let i = 0; i <= 15; i++) {
    if (i === 0) {
        pot = 1;
    } else {
        pot *= 3;
    }
    console.log(`3 elevado a ${i} = ${pot}`);
}

alert("Potências geradas no console (F12).");