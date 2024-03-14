/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno: claudio gabriel gonçalves batista
E-mail: claudiogabrielbatista@gmail.com
*/
console.clear();
var teclado = require("prompt-sync")();
var a1 = parseFloat(teclado("digite o valor do primeiro \u00E2ngulo: "));
var a2 = parseFloat(teclado("digite o valor do segundo \u00E2ngulo: "));
var a3 = parseFloat(teclado("digite o valor do terceiro \u00E2ngulo: "));
if (a1 == 90 || a2 == 90 || a3 == 90) {
    console.log("e um triangulo retangulo");
}
else {
    if (a1 > 90 || a2 > 90 || a3 < 90) {
        console.log("e um triangulo obtsu\u00E2ngulo");
    }
    else {
        if (a1 < 90 && a2 < 90 && a3 < 90) {
            console.log("e um trangulo acutangulo");
        }
        else {
            console.log("algo deu errado");
        }
    }
}
