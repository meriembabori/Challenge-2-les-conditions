// Mini-Projet : Calculatrice en console
const prompt = require("prompt-sync")();
let historique = [];
function addition(a, b) {
 return a + b; }
function soustraction(a, b) { 
return a - b; }
function multiplication(a, b) {
return a * b; }
function division(a, b) {
if (b === 0) {
console.log("Erreur");
return null;
}
return a / b;}
function puissance(a, b) { 
return a**b }
function racineCarree(a) {
if (a < 0) {
console.log("Erreur ");
return null}
return a**0.5;}
function factorielle(n) {
if (n < 0) {
console.log("Erreur");
return null}
let resultat = 1;
for (let i = 2; i <= n; i++) 
    resultat *= i;
return resultat;
}
function operation() {
console.log(" Addition :+");
console.log("Soustraction: -");
console.log("Multiplication: *");
console.log("Division :/");
console.log("Puissance :^");
console.log("Racine carrée: R");
console.log("Factorielle :n!");
console.log("Historique: H ");
console.log("Quitter : 9");}
let choix;
do {
    operation();
choix = prompt("Choisissez une operation :");
let a;
let b;
let resultat ;
switch (choix) {
case "+":
a=+prompt("Entrer un 1er nombre : ");
b =+prompt("Entrer un 2eme nombre");
resultat = addition(a, b);
console.log(a,"+" , b ,"=",resultat);
historique.push(a+"+"+b +"="+ resultat);
break;
case "-":
a =+prompt("Entrez le premier nombre :")
b =+prompt("Entrez le deuxième nombre :");
resultat = soustraction(a, b);
console.log(a ,"-", b ,"=", resultat);
historique.push(a+ "-" + b  + "=" + resultat);
break;
case "*":
a =+prompt("Entrez le premier nombre :");
b =+prompt("Entrez le deuxième nombre :");
resultat = multiplication(a, b);
console.log(a, "*", b, "=", resultat);
historique.push(a + "*"+ b +"=" +resultat);
break;
case "/":
a =+prompt("Entrez le premier nombre :");
b =+prompt("Entrez le deuxième nombre :");
resultat = division(a, b);
if (resultat !== null) {
console.log(a, "/", b ,"=", resultat);
historique.push(a +"/"+ b +"="+ resultat);}
break;
case "^":
a =+prompt("Entrez le premier nombre :");
b =+prompt("Entrez le deusieme nombre :");
resultat = puissance(a, b);
console.log(a,"^", b,"=" ,resultat);
historique.push(a+"^"+ b+"="+ resultat);
break;
case "R":
a =+prompt("Entrez le nombre :");
resultat = racineCarree(a);
if (resultat !== null) {
console.log("√",a ,"=", resultat);
historique.push("√"+a +"="+ resultat);}
break;
case "n!":
a =+prompt("Entrez un entier :");
resultat = factorielle(a);
if (resultat !== null){
console.log(a,"!", "=", resultat);
historique.push(a+"!"+ "="+ resultat);}
break;
case "H":
console.log("Historique des calculs");
if (historique.length == 0) {
console.log("Aucun calcul effectué.");
} else {
for (let i = 0; i < historique.length; i++) {
console.log(historique[i]);}}
break;
case "9":console.log("by");
break;
default:
console.log("Erreur ");}
}while (choix !== "9");