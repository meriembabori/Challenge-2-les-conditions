//Challenge 1 : Table de multiplication
const prompt =require("prompt-sync")();
// let nombre=prompt("entrer un nombre :")
// for (let i=1;i<=10;i++){
//     let table_de_multiplication=nombre*i;
//     console.log(nombre,"*",i,"=",table_de_multiplication);
// };
// Challenge 2 : Nombre premier
// let nbr=prompt("Entrer un nombre :");
// let premier = true
// for(let i=2;i<nbr;i++)
// {
//   if (nbr%i==0){
//         premier=false

//   }}
//   if (premier)
//       console.log("votre nombre est  premier");
//     else
//     ( console.log("votre nombre est non premier"))
// // Challenge 3 : Somme et maximum d’une série
// let somme = 0;
// let max = 0;
// let nombre;
// do {
//     nombre=+prompt("Entrez un nombre inferieur a 100 ,et le nombre 0 pour arrêter) :");;
//   if (nombre > 0 && nombre < 100) { 
//     somme += nombre;
//     if (nombre > max) {
//       max = nombre;}}
//      } while (nombre !== 0);

// console.log("La Somme des nombres est = " , somme);
// console.log("Maximum des nombres est = " , max);
// Challenge 4 : Inverser un entier
// let entier=prompt("Entrer un entier ")
// let inverse =""
// for(let i =entier.length-1;i>=0;i--){
//     inverse+=entier[i]
// }
// console.log("L inverse de votre nombre est :",inverse);
// Challenge 5 : Afficher les nombres premiers jusqu’à n
// let nombre =prompt("Entrer un nombre")
// for(let i=2;i<=nombre;i++){
// let premier=true
//    for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//    premier = false;
//  break;}
//     }
//     if (premier){console.log(i)}}
//Challenge 6 : Puissance avec while
// let base=prompt("entrer la base>0")
// let expo=prompt("entrer l exposant>=0")
// let resultat=1
// let i=0
// while(i <expo)
// { rst *= base;
// i++
// }console.log(base , " ^ " , expo ," = ",rst);
// Challenge 7 : Somme de 10 nombres (ignorer les négatifs)
// let summ=0
// let c=0

// while(c<10){
//     let nombr=+prompt("entrer un nombre :")
//     if (nombr>=0){
//         summ+=nombr
//     }
//     c++;

// }
// console.log("la somme des nombres posetif est :",summ)
// Challenge 8 : Pyramide d’étoiles (avec nombres premiers)
let lignes =+prompt("Entrez le nombre des lignes :");
let C = 0;
let nbr = 2;

while (C < lignes) {
    let Premier = true;
    for (let i = 2; i < nbr; i++) {
        if (nbr % i === 0) {
        Premier = false;
    } };
    if (Premier) {
    console.log("*".repeat(nbr));
        C++;
    }
    nbr++;}

