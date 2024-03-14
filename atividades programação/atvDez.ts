/* (10 pontos)
10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    "Telefonou para a vítima?"
    "Esteve no local do crime?"
    "Mora perto da vítima?"
    "Devia para a vítima?"
    "Já trabalhou com a vítima?" 
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada/exibida como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
Aluno: claudio gabriel gonçalves batista
*/

console.clear();
const teclado = require(`prompt-sync`)();

console.log(`____________________________________`)
console.log(`|       para "sim" digite "s"      |`)
console.log(`|       para "não" digite "n"      |`)
console.log(`|----------------------------------|`)

let suspeita: number = 0

let suspeita1: string = teclado(`telefonou para a vitima?`);
let suspeita2: string = teclado(`esteve no local do crime?`);
let suspeita3: string = teclado(`mora perto da vitima?`);
let suspeita4: string = teclado(`devia para a vitima?`);
let suspeita5: string = teclado(`ja trabalhou com a vitima?`);

if (suspeita1  == `s`) {
    ++ suspeita 
} else {suspeita + 0};
if (suspeita2 == `s`) {
    ++ suspeita
} else {suspeita + 0};
if (suspeita3  == `s`) {
    ++ suspeita 
} else {suspeita + 0};
if (suspeita4 == `s`) {
    ++ suspeita
} else {suspeita + 0};
if (suspeita5  == `s`) {
    ++ suspeita 
} else {suspeita + 0};

if(suspeita == 5) {
    console.log(`assasino`);
} else {
    if (suspeita >= 3) {
        console.log(`cúmplice`);
    } else {
        if ( suspeita == 2) {
            console.log(`suspeite`);
        } else {
            console.log(`inocente`);
        }
    }
}
