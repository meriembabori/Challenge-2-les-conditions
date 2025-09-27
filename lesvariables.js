//challenge 1 :Affichage Informations
 const prompt= require ("prompt-sync")();
// let Nom=prompt("Entrer votre nom ");
// let Prenom=prompt("Entrer votre prenom ");
// let age=prompt ("Entrer votre age");
// let sex=prompt("Entrer votre sex");
// let Adress= prompt ("Entrer votre adress");
// console.log("le Nom est :",Nom);
// console.log("Le prenom est :",Prenom);
// console.log("L'age est :",age);
// console.log("le sex est :",sex);
// console.log("l'adress est :",Adress);
//challenge 2:Conversion °C → °F
// let C = prompt("Entrez la température en Celsius : ");
// C = +C; 
// let F = (C * 1.8) + 32;
// console.log("La température en Fahrenheit est : " + F);
//challenge 3:Échanger
// let A=prompt("Entre un variable A")
// let B=prompt("Entrer un deusieme variable B");
// let C=prompt("Entrer un troisieme variable C");
// let valeur=A;
// A=B;
// B=C;
// C=valeur;
// console.log("A =",A," B=",B,"C=",C);
//Challenge4 : Calcul et affichage des opérations
// let a=+prompt("Entrer la valeur de a");
// let b=+prompt("Entrer la valeur de b");
// console.log("a+b =",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);
//challenge5:Somme et Moyenne
// let nbr1 = +prompt("Entrez le 1 nombre : ");
// let nbr2 = +prompt("Entrez le 2 nombre : ");
// let nbr3 = +prompt("Entrez le 3 nombre : ");
// let nbr4 = +prompt("Entrez le 4 nombre : ");
// let somme =nbr1+nbr2+nbr3+nbr4;
// let moyenne = somme/4;
// console.log("la somme est :",somme);
// console.log("la moyenne est : ", moyenne);
//challenge 6: Temps
// let dist=+prompt("Entrer la distance");
// let vitesse = +prompt ("Entrer la vitesse");
// let temps = dist/vitesse ;
// console.log("le temps necessaire pour parcourir cette distance est",temps);
// challenge 7: Circonférence d’un cercle
// let rayon= prompt("Entrer le rayon de cercle ");
// let Circonference =2 * Math.PI /rayon;
// console.log("la circonférence du cercle est egale =", Circonference);
// challenge 8 : Inverser un nombre à 3 chiffres
// let nombre=prompt("Entrer un nombre a 3 chiffre");
// let nbr_inverse= nombre.split("").reverse().join("");
// console.log("L inverse du nombre est :",nbr_inverse);
//challenge 9 : Conversion Km → Mile;
// let distance=prompt("Entrer une distance en kilometre ");
// let Mile=distance/1.602;
// console.log("la ditance en Mile est :",Mile);
//challenge 10: Conversion €→ MAD
let euros =+prompt("Entrer la valeur en euros");
let Taux =10.61;
let Mad= euros * Taux;
console.log("la valeur d euros en dirham est :",Mad);













