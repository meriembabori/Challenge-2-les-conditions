const prompt = require("prompt-sync")();

let nomber = prompt("entrez un nomber : ");

if (nomber  % 2 == 0)
    { 
        console.log("le nombre est pair");
    }
  else
     {
        console.log("le nombre est impair");
}