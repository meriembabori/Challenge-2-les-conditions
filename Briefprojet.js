const prompt=require("prompt-sync")();
let livres = [ 
{ isbn: "123", titre: "Le Petit Prince", auteur: "Saint-Exupéry", 
annee: 1943, disponible: true }, 
{ isbn: "456", titre: "L'Étranger", auteur: "Camus", annee: 1942, 
disponible: true } 
];  
let abonnes = [];
let emprunts = [];
function menuPrincipal() {
    console.log("=== Menu Principal ===");
    console.log("1. Afficher tous les livres");
    console.log("2. Introduire un livre");
    console.log("3.Ajouter plusieur livres ");
    console.log("4. Trier les livres par titre");
    console.log("5. Trier les livres par année");
    console.log("6. Afficher livres disponibles");
    console.log("7. Ajouter un abonné");
    console.log("8. Rechercher un livre ");
    console.log("9. Afficher les abonnés");
    console.log("10. Enregistrer un emprunt");
    console.log("11. Enregistrer un retour");
    console.log("12. Quitter");}
function Introduirelivre() {
    let isbn = prompt("ISBN : ");
    let titre = prompt("Titre : ");
    let auteur = prompt("Auteur : ");
    let  annee = +prompt("Annee de publication : ");
    livres.push({  isbn, titre, auteur, annee, disponible: true } );
    console.log("Livre ajouté");}
function ajouterPlusieursLivres() {
    let n = parseInt(prompt("Combien de livres voulez-vous ajouter ? "));
    for (let i = 0; i < n; i++) {
        console.log("Livre " + (i + 1));
        Introduirelivre();
    }
}
function afficherLivres(){
     if (livres.length === 0){  return console.log("Aucun livre a afficher.");
    }
    else{
        console.log(livres)}}
function trierParTitre(){
    console.log("1. trier par titre (ascendant)");
    console.log("2. trier par titre (descendant)");
    let choix = prompt("Choix : ");
    let livresTries=[...livres];
    if (choix == "1") {
        livresTries.sort((a, b) => a.titre.localeCompare(b.titre));
    } else if (choix == "2") {
        livresTries.sort((a, b) => b.titre.localeCompare(a.titre));
    }
    afficherLivres(livresTries);
}
function trierParAnnee(){
    console.log("1. trier par année (ascendant)");
    console.log("2. trier par année (descendant)");
    let choix = prompt("Choix : ");
    let livresTries=[...livres];
    if (choix == "1") {
        livresTries.sort((a, b) => a.annee - b.annee);
    } else if (choix == "2") {
        livresTries.sort((a, b) => b.annee - a.annee);
    }
    afficherLivres(livresTries);}
function afficherLivresDisponibles() {
    let disponibles = livres.filter(l => l.disponible);
    afficherLivres(disponibles);}
function ajouterAbonne() {
    let id =+prompt("ID abonne : ");
    let nom = prompt("Nom : ");
    let prenom = prompt("Prenom : ");
    let email = prompt("Email : ");
    abonnes.push({ id, nom, prenom, email });
    console.log("Abonnes ajouter avec succées!");}
function afficherAbonnes(){
    if (abonnes.length === 0){  return console.log("Aucun abonne pour le moment");
    }
    else{console.log(abonnes)}}
function rechercherLivreParISBN() {
    let isbn = prompt("Entrez l'ISBN du livre: ");
    let livre = livres.find(l => l.isbn === isbn);
    if (livre) {
        afficherLivres([livre]);
    } else {
        console.log("Livre non trouvé.");
    }
}
function enregistrerEmprunt() {
    let abonneId = parseInt(prompt("ID de l'abonné : "));
    let abonne = abonnes.find(a => a.id === abonneId);
 if (!abonne) {
        console.log("Abonné non trouvé.");
        return;}
let isbn = prompt("ISBN du livre à emprunter : ");
    let livre = livres.find(l => l.isbn === isbn);

    if (!livre) {
        console.log("Livre inexistant.");
        return;}
if (!livre.disponible) {
        console.log("Ce livre n'est pas disponible pour l'emprunt.");
        return;
    }
    livre.disponible = false;
    emprunts.push({ abonneId, isbn });
console.log("Emprunt enregistré ! " +livre.titre +" est maintenant emprunté par " +abonne.prenom + " " + abonne.nom )
    ;}
function enregistrerRetour() {
    let isbn = prompt("ISBN du livre à retourner : ");
    let livre = livres.find(l => l.isbn === isbn);
if (!livre) {
        console.log("Livre inexistant.");
    return;}
    if (livre.disponible) {
        console.log("Ce livre est déjà disponible.");}
    emprunts = emprunts.filter(e => e.isbn !== isbn);
console.log("Retour enregistré ! " + livre.titre + " est maintenant disponible.");}
let choix;
do {
    menuPrincipal();
    choix = prompt("Votre choix : ");
    switch(choix){
        case "1": afficherLivres(); break;
        case "2": Introduirelivre(); break;
        case "3": ajouterPlusieursLivres(); break;
        case "4": trierParTitre(); break;
        case "5": trierParAnnee(); break;
        case "6": afficherLivresDisponibles(); break;
        case "7": ajouterAbonne(); break;
        case "8":rechercherLivreParISBN(); break;
        case "9": afficherAbonnes(); break;
        case "10": enregistrerEmprunt(); break;
        case "11": enregistrerRetour(); break;
        case "12": console.log("Au revoir !"); break;
        default: console.log("Choix invalide !"); break;
    }
} while(choix !== "12")