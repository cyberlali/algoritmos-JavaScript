let n = parseInt(prompt("Digita um número para ver a sua tabuada:"));
let i = 1;

console.log(`Tabuada do ${n}:`);

while (i <= 10) {
    console.log(`${n} x ${i} = ${n * i}`);
    i++;
}

alert("Tabuada gerada! Consulta a consola do navegador (F12).");