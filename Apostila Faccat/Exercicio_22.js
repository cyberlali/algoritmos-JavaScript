let horasTrabalhadasMensais = parseFloat(prompt("Digita o número total de horas trabalhadas no mês:"));
let salarioPorHora = parseFloat(prompt("Digita o valor do salário por hora:"));

// Mês tem 4 semanas. Jornada normal = 40 * 4 = 160 horas.
let horasRegularesMensais = 160; 
let salarioTotal;

if (horasTrabalhadasMensais > horasRegularesMensais) {
    let horasExtras = horasTrabalhadasMensais - horasRegularesMensais;
    let valorHoraExtra = salarioPorHora * 1.50; // Acréscimo de 50%
    
    salarioTotal = (horasRegularesMensais * salarioPorHora) + (horasExtras * valorHoraExtra);
} else {
    salarioTotal = horasTrabalhadasMensais * salarioPorHora;
}

console.log(`O salário total do funcionário é: R$ ${salarioTotal.toFixed(2)}`);
alert(`O salário total do funcionário é: R$ ${salarioTotal.toFixed(2)}`);