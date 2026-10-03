// Cálculo de combustível gasto em viagem
let tempo = parseFloat(prompt("Digite o tempo gasto na viagem (horas):"));
let velocidade = parseFloat(prompt("Digite a velocidade média (km/h):"));

let distancia = tempo * velocidade;
let litrosUsados = distancia / 12;

console.log(`Velocidade Média: ${velocidade} km/h`);
console.log(`Tempo Gasto: ${tempo} horas`);
console.log(`Distância Percorrida: ${distancia} km`);
console.log(`Litros Utilizados: ${litrosUsados.toFixed(2)} L`);

alert(`Distância: ${distancia} km\nLitros Usados: ${litrosUsados.toFixed(2)} L`);