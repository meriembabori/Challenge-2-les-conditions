//Écris un programme qui lit une série de nombres positifs < 100
const prompt = require ("prompt-sync")();
let nbr=prompt(" entrer un nombre :");
let lasomme=0;
let lemaximum=0;
let i= 0;
while(nbr<100 && nbr>=0)
{ console.log("le nbre iferieure a 100 est :" ,nbr % 10==0 )}
{ lasomme=lasomme+nbr;
  console.log("la somme des nbre inferieur a 100 est :",lasomme);
}
if (nbr>lemaximum)
{ lemaximum=nbr;
  console.log("le maximum des nbre inferieur a 100 est :",lemaximum);
}
else
i++;
