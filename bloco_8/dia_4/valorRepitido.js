
/* funçao parar retirar valores repetidos de uma arry */


const numeros = [2, 5, 6, 8, 5, 1 ,4, 6, 2, 8, 5, 6];

console.log(numeros);

const numerosSemRepeticao = [...new Set(numeros)];
console.log(numerosSemRepeticao);