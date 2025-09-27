//Écris un programme qui demande à l’utilisateur d’entrer 5 entiers
const prompt=require("prompt-sync")();
let tableau=[];
for (let i=0;i<5;i++)
{
    let nombre=prompt("Entrer un nombre entier :");
    tableau.push(nombre);
}