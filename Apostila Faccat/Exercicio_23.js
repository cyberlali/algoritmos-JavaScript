let nome = prompt("Digita o teu nome:");
let sexo = prompt("Digita o teu sexo (M para Masculino, F para Feminino):").toUpperCase();
let altura = parseFloat(prompt("Digita a tua altura (ex: 1.75):"));

let pesoIdeal;

if (sexo === "M") {
    pesoIdeal = (72.7 * altura) - 58;
    console.log(`Sr. ${nome}, o seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
    alert(`Sr. ${nome}, o seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
} else if (sexo === "F") {
    pesoIdeal = (62.1 * altura) - 44.7;
    console.log(`Sra. ${nome}, o seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
    alert(`Sra. ${nome}, o seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
} else {
    alert("Sexo inválido. Por favor, digita 'M' ou 'F'.");
}