let B = parseInt(prompt("Digita o valor da base (B):"));
let E = parseInt(prompt("Digita o valor do expoente (E):"));

let pot = 1;
let i = 1;

while (i <= E) {
    pot *= B;
    i++;
}

console.log(`${B} elevado a ${E} = ${pot}`);
alert(`${B} elevado a ${E} = ${pot}`);