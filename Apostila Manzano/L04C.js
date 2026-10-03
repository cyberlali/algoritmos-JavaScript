let i = 1;

console.log("Números divisíveis por 4 menores que 200:");

do {
    if (i % 4 === 0) {
        console.log(i);
    }
    i++;
} while (i < 200);

alert("Valores exibidos na consola do navegador (F12).");