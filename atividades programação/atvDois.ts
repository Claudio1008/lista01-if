/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x.
Nome Aluno: claudio gabriel gonçalves batista
*/

console.clear();
const teclado = require (`prompt-sync`)();

var x: number = parseFloat(teclado(`digite o valor de x: `));
var y: number = parseFloat(teclado(`digite o valor de y: `));

console.clear();
console.log(`o valor de x é ${x} e o valor de y é ${y}`)

var aux = x
var x = y
var y = aux
console.log(`o valor de x é ${x} e o valor de y é ${y}`)
