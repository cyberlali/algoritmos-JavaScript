let salarioAtual = parseFloat(prompt("Digita o salário mensal atual:"));
let percentualReajuste = parseFloat(prompt("Digita o percentual de reajuste (%):"));

let novoSalario = salarioAtual + (salarioAtual * (percentualReajuste / 100));

console.log(`O valor do novo salário é: R$ ${novoSalario.toFixed(2)}`);
alert(`O valor do novo salário é: R$ ${novoSalario.toFixed(2)}`);