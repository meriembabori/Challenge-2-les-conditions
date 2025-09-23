//Challenges JavaScript : Conditions Système de connexion
const prompt = require("prompt-sync")();
let Nom_utilisateur=prompt("Saisir le nom d utilisateur");
let mot_de_passe=prompt("Saisir ton mot de passe");
if (Nom_utilisateur=="admin"&&mot_de_passe=="1234")
{
    console.log("Bienvenue Admin");
}
else if (Nom_utilisateur=="admin"&&mot_de_passe!=="1234")
{
    console.log("Mot de passe incorrect");
}
else 
{
    console.log("Utilisateur introuvable");
}