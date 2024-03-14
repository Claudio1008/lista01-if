/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata, sabendo que PI é um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA, utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: claudio gabriel gonçalves batista
*/

console.clear();
const teclado = require(`prompt-sync`)();

let raio = parseFloat(teclado(`digite o raio: `));
let altura = parseFloat(teclado(`digite a altura: `))
let volume = (((raio*raio)*3.14159)*altura);

console.clear();
console.log(`o volume é ${volume}`)
