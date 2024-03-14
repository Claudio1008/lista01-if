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
var teclado = require("prompt-sync")();
console.log("____________________________________");
console.log("|       para \"sim\" digite \"s\"      |");
console.log("|       para \"n\u00E3o\" digite \"n\"      |");
console.log("|----------------------------------|");
var suspeita = 0;
var suspeita1 = teclado("telefonou para a vitima?");
var suspeita2 = teclado("esteve no local do crime?");
var suspeita3 = teclado("mora perto da vitima?");
var suspeita4 = teclado("devia para a vitima?");
var suspeita5 = teclado("ja trabalhou com a vitima?");
if (suspeita1 == "s") {
    ++suspeita;
}
else {
    suspeita + 0;
}
;
if (suspeita2 == "s") {
    ++suspeita;
}
else {
    suspeita + 0;
}
;
if (suspeita3 == "s") {
    ++suspeita;
}
else {
    suspeita + 0;
}
;
if (suspeita4 == "s") {
    ++suspeita;
}
else {
    suspeita + 0;
}
;
if (suspeita5 == "s") {
    ++suspeita;
}
else {
    suspeita + 0;
}
;
if (suspeita == 5) {
    console.log("assasino");
}
else {
    if (suspeita >= 3) {
        console.log("c\u00FAmplice");
    }
    else {
        if (suspeita == 2) {
            console.log("suspeite");
        }
        else {
            console.log("inocente");
        }
    }
}
