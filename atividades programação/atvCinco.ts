/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o programa informe qual é o número maior, com a seguinte frase: `O número maior é ${variavel} e o número menor é ${variavel}`, se ser iguais uma frase:  ` Os números ${variavel} e ${variavel} são iguais`.
Nome: claudio gabriel gonçalves batista
*/

console.clear();
const teclado = require (`prompt-sync`)();

let n1: number = parseFloat(teclado(`digite o primeiro numero: `));
let n2: number = parseFloat(teclado(`digite o segundo numero` ));

if(n1>n2) {
    console.log(`o numero é maior é ${n1} e o
    numero menor é ${n2}`);
} else {
    if (n2>n1) {
        console.log(`o numero maior é ${n2} e o
        numero menor ${n1}`);
    } else {
        console.log(`os numeros ${n1} e ${n2} são iguais`);
    }
};