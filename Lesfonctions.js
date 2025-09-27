//challenge 1 :Somme d’un tableau

function sommeTableau(tab1) {
    let somme = 0;
    for (let i = 0; i < tab1.length; i++) {
        somme += tab1[i];
    }
    return somme;
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
    {
        newtbl.push(tab4[i])
    }
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





