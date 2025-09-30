// To-Do List
const prompt=require("prompt-sync")();
let taches=[]
let id =1 
function AfficherTaches() {
    if (taches.length === 0) {
        console.log("Aucune tache trouvee");
    } else {
        console.log("--- Liste des tâches ---");
        for (let t of taches) {
         console.log("[" + t.id + "] " + t.titre + " - " + t.description + " (" + t.statut + ")");}}

}
function ajouterTache(taches) {
      let titre= prompt("Entrer un titre a la tache : ");
      let description = prompt("Entrer une description a la tache :")
      taches.push({id:id++,titre,description});
      console.log("Ajout avec succès !");
  };
      ajouterTache(taches);
      console.log(taches);
function RechercherTache() {
      let recherche = prompt("Entrer le titre a rechercher : ");
      let trouvees = [];
      for (let t of taches) {
      if (t.titre.includes(recherche)) { 
      trouvees.push(t);}}
      if (trouvees.length === 0) {
      console.log("Aucune tache trouvee.");
} else {
      console.log("Resultats :");
      for (let t of trouvees) {
      console.log("[" + t.id + "] " + t.titre + " - " + t.description + " (" + t.statut + ")");}}
}
function Modifier(){
      let idmod=prompt("Entrer l' id du tache a modofier : ")
      let trouve = false;
      for (let t of taches) {
      if (t.id == idmod) {
      let newdescription = prompt("Nouvelle description : ");
      t.description = newdescription;
      console.log("Tache modifiee ");
      trouve = true;
break;}
      if (!trouve) {console.log("Tache introuvable ");}}};
      function supprimerTache() {
      let idSup = parseInt(prompt("Entrer l'ID de la tache a supprimer : "));
      let tachesNouvelles = [];
      for (let t of taches) {
      if (t.id !== idSup) {   
      tachesNouvelles.push(t);}}
      if (tachesNouvelles.length === taches.length) {
      console.log(" Tache introuvable.");
} else {
      taches = tachesNouvelles;
      console.log("Tache supprimee !");}}
function afficherTerminees() {
      let terminees = taches.filter(t => t.statut === "Terminee");
      if (terminees.length === 0) {
      console.log("Aucune tache terminee.");
} else {
      console.log("Taches terminees ");
      for (let t of terminees) {
      console.log("[" + t.id + "] " + t.titre + " - " + t.description);}}}
function afficherEnAttente() {
      let enAttente = taches.filter(t => t.statut === "En attente");
      if (enAttente.length === 0) {
      console.log("Aucune tache en attente.");
} else {
      console.log("  Taches en attente ");
      for (let t of enAttente) {
      console.log("[" + t.id + "] " + t.titre + " - " + t.description);}}}
   function menu() { 
    console.log("=== To-Do List ===");
    console.log("1. Afficher les taches");
    console.log("2. Ajouter une tache");
    console.log("3. Rechercher une tache");
    console.log("4. Modifier une tache");
    console.log("5. Supprimer une tache");
    console.log("6. Changer le statut d'une tache")
    console.log("7.tache terminée");
    console.log("8. tache en attente")
   console.log("0. Quitter");}
   let choix
do{ 
   menu();
    choix = prompt("Choisissez une option : ");
    switch (choix) {
      case "1":AfficherTaches();
      break;
      case "2": ajouterTache();
       break;
      case "3": RechercherTache();
      console.log(RechercherTache())
       break;
      case "4": Modifier();
      console.log(Modifier())
       break;
      case "5": supprimerTache();
       break;
      case "6": changerStatut();
       break;
      case "7": afficherTerminees();
   
       break;
      case "8": afficherEnAttente();
      
       break;
      case "0": console.log("Au revoir !");
       break;
      default: console.log("Option invalide.");
    }
  } while (choix!=="0");
  
