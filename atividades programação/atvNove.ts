/* (15 pontos)
9- Para doar sangue é necessário ter entre 18 e 67 anos e possuir mais de 60Kg. Faça um aplicativo que pergunte a idade de uma pessoa e seu peso e diga se ela pode doar sangue ou não, caso não diga o(s) motivo(s).
Nome: claudio gabriel gonçalves batista
*/

console.clear();
const teclado = require(`prompt-sync`)();

let idade: number = parseFloat(teclado(`digite a sua idade: `));
let peso: number = parseFloat(teclado(`digite seu peso: `));

if (idade > 18 && idade < 67 && peso > 60) {
    console.log(`doação aprovada`)
} else {
    if (idade < 18 && peso > 60) {
        console.log(`você não apresenta a idade minima para doar`)
    } else { if (idade < 18 && peso < 60) {
        console.log(`você não apresenta a idade e o peso minimos para doar `)
    } else {
        if (idade > 67 && peso > 60) {
            console.log(`voce apresenta uma idade mais que a permitida para doar `)
        } else {
            if (idade > 67 && peso < 60) {
                console.log(`você apresenta uma idade que permitida para doar e um peso que não atinge o minimo`)
            }else {
                if (peso < 60) {
                    console.log(`você não apresenta o peso minimo para doar`)
                
            } else {
                console.log(`algo deu errado`)
            }
        }
    }}
    }}