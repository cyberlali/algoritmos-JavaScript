// Conversão de Fahrenheit para Celsius
let F = parseFloat(prompt("Digite a temperatura em graus Fahrenheit (°F):"));
let C = (F - 32) * (5 / 9);

console.log(`${F}°F equivalem a ${C.toFixed(2)}°C.`);
alert(`${F}°F equivalem a ${C.toFixed(2)}°C.`);