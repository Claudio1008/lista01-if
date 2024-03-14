/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o programa informe qual é o número maior, com a seguinte frase: `O número maior é ${variavel} e o número menor é ${variavel}`, se ser iguais uma frase:  ` Os números ${variavel} e ${variavel} são iguais`.
Nome: claudio gabriel gonçalves batista
*/
console.clear();
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("digite o primeiro numero: "));
var n2 = parseFloat(teclado("digite o segundo numero"));
if (n1 > n2) {
    console.log("o numero \u00E9 maior \u00E9 " + n1 + " e o\n    numero menor \u00E9 " + n2);
}
else {
    if (n2 > n1) {
        console.log("o numero maior \u00E9 " + n2 + " e o\n        numero menor " + n1);
    }
    else {
        console.log("os numeros " + n1 + " e " + n2 + " s\u00E3o iguais");
    }
}
;
