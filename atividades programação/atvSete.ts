/* (10 pontos)
 7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
Nome Aluno: claudio gabriel gonçalves batista
E-mail: claudiogabrielbatista@gmail.com
*/

console.clear();
const teclado = require (`prompt-sync`)();

let quantMaca: number = parseFloat(teclado(`digite a quantidade de maçãs compradas:`));
let valorTotal: number = 0;

if(quantMaca < 12) {
    valorTotal = quantMaca*0.3
}else {
    valorTotal = quantMaca*0.25
}
console.log(`o valor total da compra é de ${valorTotal}`);
