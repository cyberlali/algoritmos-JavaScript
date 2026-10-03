let homem1 = parseInt(prompt("Idade do 1º homem:"));
let homem2 = parseInt(prompt("Idade do 2º homem (diferente do 1º):"));
let mulher1 = parseInt(prompt("Idade da 1ª mulher:"));
let mulher2 = parseInt(prompt("Idade da 2ª mulher (diferente da 1ª):"));

let hVelho = homem1 > homem2 ? homem1 : homem2;
let hNovo = homem1 < homem2 ? homem1 : homem2;

let mVelha = mulher1 > mulher2 ? mulher1 : mulher2;
let mNova = mulher1 < mulher2 ? mulher1 : mulher2;

let soma = hVelho + mNova;
let produto = hNovo * mVelha;

console.log(`Soma (H mais velho + M mais nova) = ${soma}`);
console.log(`Produto (H mais novo * M mais velha) = ${produto}`);
alert(`Soma: ${soma}\nProduto: ${produto}`);