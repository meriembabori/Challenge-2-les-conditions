//challenge 1 : Pair ou Impair
const prompt= require ("prompt-sync")();
// let nombre = prompt ("Entrer un nombre");
// if (nombre %2==0)
// {
//     console.log(nombre,"est pair")

// }
// else
// {
//     console.log(nombre,"est impair")
// };
//challenge 2 : Positif, Négatif ou Zéro
// let nombr = prompt ("Entrer un nombre");
// if(nombr>0)
// {
//     console.log(nombr,"est positif")
// }
// else if (nombr<0)
// {
//     console.log(nombr,"est negatif")
// }
// else
// {
//     console.log(nombr,"est nul")
// };
// challenge 3:  Éligibilité au vote
// let Age=prompt("Entrer votre age ");
// if (Age>=18)
// {
//     console.log("Éligibldeux e au vote");
// }
// else
// {
//     console.log("Non éligible");
// }
//challenge4:Maximum de nombres
// let A=prompt("Entrer un nombr");
// let B=prompt("entrer un nombr");
// if(A>B)
// { console.log("le plus grand nombr est :",A);

// }
// else 
// {console.log("le plus Grand nombr est : ",B);
// }
//challenge 5 : Contrôle des notes (switch case)
// let score=prompt("Entre un score entre 0 est 100 : ");
// switch(true)
// {case(score>=90 && score<=100):
//     console.log("A")
//      break
//     case(score>=80 && score <=89):
//     console.log("B")
//     break
//     case(score>=70 && score <=79):
//     console.log("C");
//      break
//      case(score>=60 && score <=69):
//     console.log("D");
//     break
//     default :
//     console.log("F");
// }
//challenge6:Année bissextile
// let Année=prompt("Entrer une année")
// if (Année%4==0&& Année%100==0)
// {
//     console.log(Année,"est une année bissextile")

// }else if (Année%100==0)
// {
//     console.log(Année,"est non bissextile")
// }else
// {
//     console.log(Année,"est non bissextile")
// }
// challenge 7 : Force du mot de passe
// let mot_de_passe=prompt("Crrer votre mot de passe");
// let nbr = ["0","1","2","3","4","5","6","7","8","9"]
// let caractere =["/","[","!","@","#","$","%","^","&","*","(",")",".","?",]

// if(mot_de_passe.length<6){
//     console.log("Faible");
// }
// else if(mot_de_passe.length>=6 && mot_de_passe.includes(nbr))
//  {    console.log("Moyen");
//  }
// else if (mot_de_passe.length>=8 &&  mot_de_passe.includes(nbr) && mot_de_passe.includes(caractere)){

//     console.log("Fort");
//      }
// else
//     { 
//         console.log("Moyen");
//     }
//challenge 8: Feu tricolore
// let feu=prompt("Entrer la couleur du feu");
// if(feu=="rouge")
// {
//     console.log("ARRET");
// }
// else if(feu=="jaune")
// {
//     console.log("Preparez vous");
// }
// else if(feu =="Vert")
//   { 
//      console.log("Allez");
//    }
// else
//    {
//      console.log("couleur non valid");
//      }    
// //challenge9:Mini FizzBuzz
// let nombre=prompt("Entrer un nombre");
// if(nombre % 3==0)
//     {
//         console.log("FIZZ");
// }
// else if (nombre % 5==0)
// {
//     console.log("Buzz");
// }
// else if (nombre %3==0 && nombre %5==0)
// {
//     console.log("FizzBuzz");
// }
// else
//    { console.log(nombre);

//     }
//challenge10:Système de connexion
let user_name=prompt("Saisir user name");
let mot_de_passe=prompt("Saisir ton mot de passe");
if (user_name=="admin"&&mot_de_passe=="1234")
{
    console.log("Bienvenue Admin");
}
else if (user_name=="admin"&&mot_de_passe!=="1234")
{
    console.log("Mot de passe incorrect");
}
else 
{
    console.log("Utilisateur introuvable");
}