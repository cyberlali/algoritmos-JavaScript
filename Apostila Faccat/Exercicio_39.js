let A = true;
let B = true;
let C = false;

// a) (A e B) ou (A xou B) -> O JS não tem operador XOU (XOR) nativo para booleanos, usamos (A !== B)
let resA = (A && B) || (A !== B);

// b) (A ou B) e (A e C)
let resB = (A || B) && (A && C);

// c) A ou C e B xou A e não B
// Traduzindo a precedência natural: A || (C && B) XOR (A && !B)
let parte1 = A || (C && B);
let parte2 = A && !B;
let resC = parte1 !== parte2;

console.log(`a) Resultado: ${resA}`);
console.log(`b) Resultado: ${resB}`);
console.log(`c) Resultado: ${resC}`);
alert("Abra a consola (F12) para ver os resultados lógicos!");