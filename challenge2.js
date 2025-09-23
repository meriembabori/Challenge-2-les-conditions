//Challenges JavaScript : Conditions positif negatif ou nul
const prompt = require("prompt-sync")();
let nombre=prompt("Entrer un nombre : ");
if (nombre<0)
{
    console.log("le nombre est negatif" );
}
else if (nombre>0)
{
    console.log("le nombre est positif");
}
else 
{console.log ("le nombre est nul");

}