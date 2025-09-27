const prompt = require("prompt-sync")();
//Challenges JavaScript : Conditions pair ou impair
let nombre=prompt("entrer un nombre : ");
if(nombre % 2 == 0)
{ 
    console.log("lenombre est pair");
}
else {
    console.log("Le nombre est impair");
}
