//challenge : la somme et la moyenne 
const prompt=require("prompt-sync")();
let tableau1=[];
let somme=0;
let moyenne=0;

for (let i=0;i<10;i++)
{
    let nombre=prompt("Entrer un nombre entier :");
    tableau1.push(nombre);
somme=+nombre[i];
moyenne=somme/10;
}
console.log("la somme est :",somme);
console.log("la moyenne est :",moyenne);
