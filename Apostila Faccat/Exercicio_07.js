let anos = parseInt(prompt("Digita a quantidade de anos da tua idade:"));
let meses = parseInt(prompt("Digita a quantidade de meses:"));
let dias = parseInt(prompt("Digita a quantidade de dias:"));

// Considerando ano com 365 dias e mês com 30 dias
let idadeEmDias = (anos * 365) + (meses * 30) + dias;

console.log(`A tua idade expressa apenas em dias é aproximadamente: ${idadeEmDias} dias.`);
alert(`A tua idade expressa apenas em dias é aproximadamente: ${idadeEmDias} dias.`);