// Saudação baseada no sexo
let nome = prompt("Digite o seu nome:");
let sexo = prompt("Digite o sexo (M para Masculino / F para Feminino):").toUpperCase();

if (sexo === "M") {
    alert(`Ilmo Sr. ${nome}`);
    console.log(`Ilmo Sr. ${nome}`);
} else if (sexo === "F") {
    alert(`Ilma Sra. ${nome}`);
    console.log(`Ilma Sra. ${nome}`);
} else {
    alert("Sexo informado é inválido.");
}