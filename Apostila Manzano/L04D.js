let quadro = 1;
let graosQuadro = 1;
let totalGraos = 0;

do {
    totalGraos += graosQuadro;
    graosQuadro *= 2;
    quadro++;
} while (quadro <= 64);

console.log(`O total de grãos de trigo no tabuleiro é: ${totalGraos}`);
alert(`O total de grãos de trigo no tabuleiro é:\n${totalGraos}`);