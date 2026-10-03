let anoAtual = parseInt(prompt("Digita o ano atual:"));
let anoNascimento = parseInt(prompt("Digita o teu ano de nascimento:"));

let idade = anoAtual - anoNascimento;

if (idade >= 16) {
    console.log(`Tens ${idade} anos. PODES VOTAR este ano!`);
    alert(`Tens ${idade} anos. PODES VOTAR este ano!`);
} else {
    console.log(`Tens ${idade} anos. NÃO PODES VOTAR este ano.`);
    alert(`Tens ${idade} anos. NÃO PODES VOTAR este ano.`);
}