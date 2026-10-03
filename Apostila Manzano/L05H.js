let B = parseInt(prompt("Digite o valor da base (B):"));
let E = parseInt(prompt("Digite o valor do expoente (E):"));

let pot = 1;

for (let i = 1; i <= E; i++) {
    pot *= B;
}

console.log(`${B} elevado a ${E} = ${pot}`);
alert(`${B} elevado a ${E} = ${pot}`);