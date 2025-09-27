//Challenges JavaScript : Conditions Feu tricolore
const prompt = require("prompt-sync")();
let feu=prompt("Entrer la couleur du feu");
if(feu=="rouge")
{
    console.log("ARRET");
}
else if(feu=="jaune")
{
    console.log("Preparez vous");
}
else if(feu =="Vert")
  { 
     console.log("Allez");
   }
else
   {
     console.log("couleur non valid");
     }   