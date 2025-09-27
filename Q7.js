//Challenges JavaScript : Conditions  Force du mot de passe
const prompt = require("prompt-sync")();
let mot_de_passe=prompt("Crrer votre mot de passe");
if(mot_de_passe.length<6){
    console.log("Faible");
}
else if(mot_de_passe.length>6 &&  (mot_de_passe.includes("0") || mot_de_passe.includes("1") || mot_de_passe.includes("2") || mot_de_passe.includes("3") || mot_de_passe.includes("4") || mot_de_passe.includes("5") || mot_de_passe.includes("6") || mot_de_passe.includes("7") || mot_de_passe.includes("8") || mot_de_passe.includes("9"))  )
 {    console.log("Moyen");
 }
else if (mot_de_passe.length>=8 &&  (mot_de_passe.includes("0") || mot_de_passe.includes("1") || mot_de_passe.includes("2") ||   mot_de_passe.includes("3") || mot_de_passe.includes("4") || mot_de_passe.includes("5") ||  mot_de_passe.includes("6") || mot_de_passe.includes("7") || mot_de_passe.includes("8") ||  mot_de_passe.includes("9")) &&  (mot_de_passe.includes("!") || mot_de_passe.includes("@") || mot_de_passe.includes("#") || mot_de_passe.includes("$") || mot_de_passe.includes("%") || mot_de_passe.includes("^") ||  mot_de_passe.includes("&") || mot_de_passe.includes("*") || mot_de_passe.includes("(") || mot_de_passe.includes(")"))) 
{ 
    console.log("Fort");
     }
else
    { 
        console.log("Moyen");
    }     