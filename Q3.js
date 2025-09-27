//Challenges JavaScript : Conditions Éligibilité au vote
const prompt = require("prompt-sync")();
let Age=prompt("Entrer votre age : ");
if (Age>=18)
{
    console.log("Éligibldeux e au vote");
}
else {
    console.log("Non éligible");
}
