let F = parseFloat(prompt("Digite a temperatura em graus Fahrenheit (°F):"));

// Isolando C na fórmula: C = ((F - 32) / 9) * 5
let C = ((F - 32) / 9) * 5;

console.log(`${F}°F correspondem a ${C.toFixed(2)}°C.`);
alert(`${F}°F correspondem a ${C.toFixed(2)}°C.`);