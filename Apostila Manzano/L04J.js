// Divisão inteira de dois números sem usar o operador DIV
let dividendo = parseInt(prompt("Digite o dividendo:"));
let divisor = parseInt(prompt("Digite o divisor:"));

if (divisor === 0) {
    alert("Divisão por zero não é permitida!");
} else {
    let quociente = 0;
    let resto = dividendo;

    if (resto >= divisor) {
        do {
            resto -= divisor;
            quociente++;
        } while (resto >= divisor);
    }

    console.log(`${dividendo} ÷ ${divisor} = ${quociente} (resto ${resto})`);
    alert(`Quociente (resultado inteiro): ${quociente}\nResto: ${resto}`);
}