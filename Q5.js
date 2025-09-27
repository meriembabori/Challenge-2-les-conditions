//Challenges JavaScript : Conditions Contrôle des notes (switch case)
const prompt = require("prompt-sync")();
let score=prompt("Entre un score entre 0 est 100 : ");
switch(score)
{
    case(score>=90 && score<=100):
    console.log("A");
     break;
    case(score>=80 && score <=89):
    console.log("B");
  break;
    case(score>=70 && score <=79):
    console.log("C");
     break;
    case(score>=60 && score <=69):
    console.log("D");
    break;
    default :
    console.log("F");

}
