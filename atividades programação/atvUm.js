console.clear();
var teclado = require("prompt-sync")();
var raio = parseFloat(teclado("digite o raio: "));
var altura = parseFloat(teclado("digite a altura: "));
var volume = (((raio * raio) * 3.14159) * altura);
console.clear();
console.log("o volume \u00E9 " + volume);
