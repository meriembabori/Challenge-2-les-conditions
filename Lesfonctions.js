//challenge 1 :Somme d’un tableau
function sommeTableau(tab1) {
let somme1 = 0;
for (let i = 0; i < tab1.length; i++) {
somme1 += tab1[i];}
return somme1;
}
console.log(sommeTableau([1,2,3]) );
// challenge 2 : Maximum dans un tableau
function maxTableau(tab2){
let max=tab2[0]
for(let i=0;i<tab2.length;i++){
if (max<tab2[i]){
max=tab2[i]}
}
return max
}
console.log("le max est ",maxTableau([1,2,7]))
//challenge3: Comptage d’éléments
function compterOccurrences(tab3, valeur) {
let count = 0;
for (let i = 0; i < tab3.length; i++) {
if (tab3[i] == valeur) {
count++;   }
}
return count;
}
let valeur = 2;
console.log(compterOccurrences([1, 2, 2, 4], valeur))
//challenge 4:Tableau inversé:
function inverserTableau(tab4) {
let newtbl=[]
for(let i=tab4.length-1;i>=0;i--)
{newtbl.push(tab4[i])}
return newtbl;
}
console.log(inverserTableau([1,2,3]))
// challenge 5 : Nombres pairs uniquement
function filtrerPairs(tab5) {
let pair=[]
for (let i = 0; i < tab5.length; i++) {
if (tab5[i] % 2 == 0){
pair.push(tab5[i])}  
}
return pair;}
console.log(filtrerPairs([1,2,3,4])) 
// challenge6: Produit des éléments
function produitTableau(tab) {
let produit = 1;
for (let i = 0; i < tab.length; i++) {
produit *= tab[i];}
return produit;
}
let myTabl = [2, 3, 4];
console.log("Le produit du tableau est :", produitTableau(myTabl));
// challenge 7:Moyenne des notes
function moyenne(tab) {
let somme = 0;
for (let i = 0; i < tab.length; i++) {
somme += tab[i];}
return somme / tab.length;
}
let monTab = [2, 4, 6, 8];
console.log("La moyenne du tableau est :", moyenne(monTab));  
// challenge 8:Doubler les valeurs
function doubler(tab) {
let resultat = [];
for (let i = 0; i < tab.length; i++) {
resultat.push(tab[i] * 2);
}return resultat;}
let monTableau = [1, 3, 5, 7];
console.log("Tableau doublé :", doubler(monTableau));
// challenge 9 :Fusionner deux tableaux
function fusionner(tab1, tab2) {
let resultat = tab1.concat(tab2);
return resultat;}
let tableau1 = [1, 2, 3];let tableau2 = [4, 5, 6];
console.log("Tableau fusionné :", fusionner(tableau1, tableau2));
// challenge 10:Supprimer les doublons
function supprimerDoublons(tab) {
let resultat = [];
for (let i = 0; i < tab.length; i++) {
if (!resultat.includes(tab[i])){ 
resultat.push(tab[i]);}}
return resultat;}
let Tableau2 = [1, 2, 2, 3, 4, 3, 5];
console.log("Tableau sans doublons :", supprimerDoublons(Tableau2));
// challenge 11 :Table de multiplication avec tableau
function tableMultiplication(n) {
let resul = [];
for (let i = 1; i <= 10; i++) {
resul.push(n * i);}
return resul;}
let nb = 3;
console.log("Table de multiplication de", nb, ":", tableMultiplication(nb));
// challenge 12 : Trouver les mots longs
function motsLongs(tabMots, longueur) {
let resultat = [];
for (let i = 0; i < tabMots.length; i++) {
if (tabMots[i].length >= longueur) {
resultat.push(tabMots[i]);}}
return resultat;}
let mots = ["Meriem", "jihan", "leila", "mum", "ratt"];
console.log(motsLongs(mots, 5));

