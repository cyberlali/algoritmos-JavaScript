// Equação do 2º grau (Fórmula de Bhaskara)
let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));
let C = parseFloat(prompt("Digite o valor de C:"));

if (A === 0) {
    alert("O valor de A deve ser diferente de zero para uma equação de segundo grau.");
} else {
    let delta = Math.pow(B, 2) - (4 * A * C);

    if (delta < 0) {
        console.log("A equação não possui raízes reais.");
        alert("A equação não possui raízes reais (Delta negativo).");
    } else {
        let x1 = (-B + Math.sqrt(delta)) / (2 * A);
        let x2 = (-B - Math.sqrt(delta)) / (2 * A);

        console.log(`X1 = ${x1.toFixed(2)}`);
        console.log(`X2 = ${x2.toFixed(2)}`);
        alert(`Raízes:\nX1 = ${x1.toFixed(2)}\nX2 = ${x2.toFixed(2)}`);
    }
}