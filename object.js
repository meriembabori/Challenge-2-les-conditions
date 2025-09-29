// Challenge 1: Niveau Débutant 
// 1:Voiture :
let voiture = {
    Marque :"fiat",
    Model:"panda",
    Année : 2018,
}
console.log(voiture)
// 2:Affichage de la marque et l année
console.log(voiture.Marque+voiture.Année );
// 3: modifier l année
voiture.Année=2016
console.log(voiture.Année);
// Ajouter une proprieté
voiture.couleur = "Rouge"
console.log(voiture.couleur)
// Supprimer une proprieté
delete voiture.Model;
console.log(voiture)
// Challenge 2: Niveau Débutant
// 1.objet etudiant
let etudiant = {
Nom:"Meriem",
Age:22,
presenter : function () {  
  console.log( " Bonjour, je m'appelle  " + this.Nom +"et j'ai "+ this.Age +"ans");
}};
etudiant.presenter()
//2 : objet personne et une boucle for...in. 
let personne={
    prenom:"Meriem",
    nom:"Babori",
    age:22,
    
}
for( let v in personne ){
    console.log(`${v}:${personne[v]}`);
}
// 3 : objet classe afficherEtudiants()
let classe={
    etudiant:["Meriem ","Noha","Jihan"],
    afficherEtudiants:function(){
        for (let i in classe.etudiant ){
            console.log(classe.etudiant[i])
        }


    }
};classe.afficherEtudiants();
// 4: tableau livres contenant 3 objets  { titre, auteur, annee }. 
let livres = [
  { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", annee: 1943 },
  { titre: "L'Étranger", auteur: "Albert Camus", annee: 1942 },
  { titre: "Les Misérables", auteur: "Victor Hugo", annee: 1862 },
];

for (let i of livres) {
  console.log(i.titre);
}
//5 : une fonction trouverLivre(titre)
function  trouverLivre(titre){ 
    for (let i of livres) {
  console.log(i.titre);
    if ( i.titre===titre)
    return i
}}
console.log(trouverLivre("L'Étranger"));
// Challenge 3: Niveau Avancé 
let entreprise = {
    adress : {
        rue:"hansali",
        ville:"beni mellal",
        codepostal:50030,
    }
};
console.log(entreprise.adress.ville);
//2: tableau produits d’objets { nom, prix, quantite }
let produits = [
  { nom: "Stylo", prix: 2.5, quantite: 100 },
  { nom: "Cahier", prix: 5.0, quantite: 50 },
  { nom: "Gomme", prix: 1.0, quantite: 200 }
];
//  Affiche la valeur totale en stock (prix * quantite pour chaque produit). 
let valeurTotale = 0;
for (let produit of produits) {
  valeurTotale += produit.prix * produit.quantite;
}
console.log( valeurTotale);
// 3: classe animal