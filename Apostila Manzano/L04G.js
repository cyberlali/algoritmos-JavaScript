let i = 1;

console.log("Fatorial dos números ímpares na faixa de 1 a 10:");

do {
    if (i % 2 !== 0) {
        let fat = 1;
        let j = 1;
        do {
            fat *= j;
            j++;
        } while (j <= i);

        console.log(`Fatorial de ${i}! = ${fat}`);
    }
    i++;
} while (i <= 10);

alert("Resultados gerados na consola do navegador (F12).");