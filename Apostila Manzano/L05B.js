let N = parseInt(prompt("Digite um número para ver a sua tabuada:"));

console.log(`Tabuada do ${N}:`);

for (let i = 1; i <= 10; i++) {
    console.log(`${N} x ${i} = ${N * i}`);
}

alert("Tabuada gerada no console (F12)!");