console.clear();
var teclado = require("prompt-sync")();
var quantMaca = parseFloat(teclado("digite a quantidade de ma\u00E7\u00E3s compradas:"));
var valorTotal = 0;
if (quantMaca < 12) {
    valorTotal = quantMaca * 0.3;
}
else {
    valorTotal = quantMaca * 0.25;
}
console.log("o valor total da compra \u00E9 de " + valorTotal);
