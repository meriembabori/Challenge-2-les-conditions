// Challenge 1 : Inverser un tableau
const prompt=require("prompt-sync")();
let tableau1 = [];
for (let i = 0; i < 5; i++) {
    let nombre1 =+prompt("Entrez un entier :");
    tableau1.push(nombre1);
}console.log("Tableau inversé :");
for (let i = tableau1.length - 1; i >= 0; i--) {
    console.log(tableau1[i]);
};
// Challenge 2 : Somme et moyenne d’un tableau
let tab2 = [];
let somme2 = 0;
for (let i = 0; i < 10; i++) {
    let nbr2 =+prompt("Entrez un entier :");
    tab2.push(nbr2);
    somme2 += nbr2;
}
let moyenne2 = somme2 / 10;
console.log("Tableau :", tab2);
console.log("Somme :", somme2);
console.log("Moyenne :", moyenne2);
// Challenge 3 : Recherche dans un tableau
let tableau3 = [];
for (let i = 0; i < 8; i++) {
    let valeur3=+prompt("Entrez un entier :");
    tableau3.push(valeur3);
}
let rechercher =+prompt("Entrez le nombre à rechercher :");
for (let i = 0; i < 8; i++) {
    if (tableau3[i] == rechercher) {
  console.log("la position du nom  est :", i+1);
    }
}
// Challenge 4 : Recherche dans un tableau de chaînes
let tableau4 = [];
for (let i = 0; i < 3; i++) {
let chaine4 = prompt("Entrez une chaîne :");
tableau4.push(chaine4)}
let rechercher4 = prompt("Entrez la chaîne à rechercher :");
for (let i = 0; i < 3; i++) {
if (tableau4[i] == rechercher4) {
console.log("La chaîne ",rechercher4," est aux position", i + 1)}}
// Challenge 5 : Min et Max d’un tableau
let tableau5 = [];
for (let i = 0; i < 7; i++) {
let nombre5=+prompt("Entrez un entier :");
tableau5.push(nombre5)}
let max5 = tableau5[0];
let min5 = tableau5[0];
for (let i = 1; i < 7; i++) {
if (tableau5[i] > max5) max5 = tableau5[i];
if (tableau5[i] < min5) min5 = tableau5[i];
}
console.log("Le plus grand nombre est :", max5);
console.log("Le plus petit nombre est :", min5);
// Challenge 6 : Carrés des éléments d’un tableau
let tableau6 = [];
let nbr6 =+prompt("Combien d'entiers voulez-vous entrer ?");
for (let i = 0; i < nbr6; i++) {
    tableau6.push(+prompt("Entrez un entier :"));
}
for (let i = 0; i < nbr6; i++) {
console.log("Le carré de", tableau6[i], "est :", tableau6[i] * tableau6[i]);
}
// Challenge7:Compter les voyelles d’une chaîne
let texte7 = prompt("Entrez une chaîne :");
let voyelles7 = "aeiouyAEIOUY";
let compter7 = 0;
for (let i = 0; i < texte7.length; i++) {
    if (voyelles7.includes(texte7[i])) {
        compter7++;
    }}console.log("Nombre de voyelles :", compter7);