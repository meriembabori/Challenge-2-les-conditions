//Challenges JavaScript : Conditions Année bissextile
const prompt = require("prompt-sync")();
let Annee=prompt("Entrer une année : ");
if (Annee % 4==0 && Annee %400==0)
  {  
    console.log("Année Bissextile");
     }
else if(Annee % 100==0)
{
    console.log("Année non bissextile");
}
else {
        console.log("Année non bissextile");
}