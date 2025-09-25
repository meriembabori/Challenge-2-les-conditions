const prompt = require('prompt-sync')();


let nom = prompt("entrer votre nom :");
let prenom = prompt("entrer votre prenom");
let age = prompt("entrer votre age");
let sexe = prompt("entrer votre sexe");
let numeroPhone = prompt("entrer votre Numero Phone");
 
//challenge 2:

let nomber = prompt("entrez un nomber : ");

if (nomber  % 2 == 0)
    { 
        console.log("le nombre est pair");
    }
  else
     {
        console.log("le nombre est impair");
};

//challenge3:

let nombre=prompt("entrez un nombre : ");
if (nombre < 0 ) 
    {
    console.log("le nomber est negative");
}
else if (nombre > 0 ) {
    console.log("le nomber est positive");
}
else {(console.log("le nomber est nul"));
}
//challenge4 :
let agee= prompt("entrez votre age : ");
if (agee < 18 )
    {
    console.log("Éligibldeux au vote");
}
else {
    console.log("Non eligible au vote");
};
//challenge6:
let N = prompt("entrer un nombre:");
let M = prompt("entrer un nombre:");
if (N>M)
{
    console.log(N)
}
else if (N>M)
{
    console.log(M)
};
//challenge7:
let nbr= prompt("entrer un nombre:");
switsh (nbr>=0 && nbr<=100) 
 {   
    Case (nbr>=90 && nbr<=100 ):
        console.log("A");
        break;
    Case (nbr=<89 && nbr>=80):
        console.log("B");let nbr= prompt("entrer un nombre:");
switsh (nbr>=0 && nbr<=100) 
 {   case nbr>=90 && nbr<=100 :
        console.log("A");
        break;
     case (nbr=<89 && nbr>=80):
        console.log("B");
        break;
    case(nbr>=70 && nbr=<79):
        console.log("C");
        break;
    case(nbr>=60 && nbr=<69):
        console.log("D");
        break;
    default :
        console.log("F"); }
        break;
    Case(nbr>=70 && nbr=<79):
        console.log("C");
        break;
    Case(nbr>=60 && nbr=<69):
        console.log("D");
        break;
    default :
        console.log("F"); }