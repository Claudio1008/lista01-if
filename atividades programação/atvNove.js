/* (15 pontos)
9- Para doar sangue é necessário ter entre 18 e 67 anos e possuir mais de 60Kg. Faça um aplicativo que pergunte a idade de uma pessoa e seu peso e diga se ela pode doar sangue ou não, caso não diga o(s) motivo(s).
Nome: claudio gabriel gonçalves batista
*/
console.clear();
var teclado = require("prompt-sync")();
var idade = parseFloat(teclado("digite a sua idade: "));
var peso = parseFloat(teclado("digite seu peso: "));
if (idade > 18 && idade < 67 && peso > 60) {
    console.log("doa\u00E7\u00E3o aprovada");
}
else {
    if (idade < 18 && peso > 60) {
        console.log("voc\u00EA n\u00E3o apresenta a idade minima para doar");
    }
    else {
        if (idade < 18 && peso < 60) {
            console.log("voc\u00EA n\u00E3o apresenta a idade e o peso minimos para doar ");
        }
        else {
            if (idade > 67 && peso > 60) {
                console.log("voce apresenta uma idade mais que a permitida para doar ");
            }
            else {
                if (idade > 67 && peso < 60) {
                    console.log("voc\u00EA apresenta uma idade que permitida para doar e um peso que n\u00E3o atinge o minimo");
                }
                else {
                    if (peso < 60) {
                        console.log("voc\u00EA n\u00E3o apresenta o peso minimo para doar");
                    }
                    else {
                        console.log("algo deu errado");
                    }
                }
            }
        }
    }
}
