console.clear();
var teclado = require("prompt-sync")();
var letra = teclado("digite uma letra: ");
if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" || letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
    console.log(" A letre \u00E9 uma vogal");
}
else {
    console.log("A letra \u00E9 uma consoante");
}
;
