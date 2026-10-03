// Reajuste salarial
let SM = parseFloat(prompt("Digite o salário mensal atual:"));
let PR = parseFloat(prompt("Digite o percentual de reajuste (%):"));

let NS = SM + (SM * (PR / 100));

console.log(`O novo salário é: R$ ${NS.toFixed(2)}`);
alert(`O novo salário é: R$ ${NS.toFixed(2)}`);