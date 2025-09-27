
const prompt=require("prompt-sync")();
let tableau=[];
for (let i=0;i<5;i++)
{
    let nombre=prompt("Entrer un nombre entier :");
    tableau.push(nombre);
}
tableau.reverse();
console.log(tableau); 

