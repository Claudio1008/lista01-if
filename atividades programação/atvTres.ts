/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.  
Nome Aluno: claudio gabriel gonçalves batista
*/

console.clear();
const teclado = require(`prompt-sync`)();

let letra: string = teclado(`digite uma letra: `);

if (letra ==`a` || letra == `e` || letra == `i` || letra == `o` || letra == `u` || letra == `A` || letra == `E` || letra == `I` || letra == `O` || letra == `U` ){
    console.log(` A letre é uma vogal`)
} else {
    console.log(`A letra é uma consoante`)
};
