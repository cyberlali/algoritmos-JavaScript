console.log("Fatorial dos números ímpares na faixa de 1 a 10:");

for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        let fat = 1;
        for (let j = 1; j <= i; j++) {
            fat *= j;
        }
        console.log(`Fatorial de ${i}! = ${fat}`);
    }
}

alert("Fatoriais gerados no console (F12)!");