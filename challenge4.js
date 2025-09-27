// challenge 3:Table de multiplication
const prompt=require("prompt-sync")();

let Nombre=prompt("Entrer un Nombre : ");
for(let i=1;i<=10;i++){
    console.log("le tableau de multiplication de : " , Nombre, "est :", Nombre,"x",i,"=",Nombre*i);
}

//Challenge 4: Nombre premier 
let NP=prompt("Entrer un nombre entier :");
let N
if (NP<=1)return false;
if (NP==2) return true ;
for (let i=2;i<=NP/2;i++)
{
    if (NP % i==0)
    {
        N=false;
    }
    else
    {
        N=true;
    }
}
console.log("Le nombre ", NP,"est premier :",N);
