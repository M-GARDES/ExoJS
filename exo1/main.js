function afficherResultat() {
    let age = parseInt(document.getElementById("age").value);//récupère la valeur de l'âge et la transforme en nombre entier
    let genre = document.getElementById("genre").value;// récupère la valeur du genre 
    let resultat = document.getElementById("resultat");//récupère l'élément HTML où afficher le résultat
    
    //test  effectué pour déterminer si la personne est imposable ou non. 
    if ((genre === "homme" && age > 20) || (genre === "femme" && age >= 18 && age <= 35)) {//homme + 20 ans ou une femme <entre 18 et 35 ans>, imposable
      resultat.innerHTML = "Vous etes imposable.";// message affiché 
    } else {//sinon un autre message affiché
      resultat.innerHTML = "Vous n'etes pas imposable.";//message affiché
    }
  }

function calculerFacture() {
   // Récupère le nombre de photocopies saisi
    let nbPhotocopies = parseInt(document.getElementById("nb-photocopies").value);
    let facture = 0;
    // Calcule la facture en fonction du nombre de photocopies
    if (nbPhotocopies <= 10) { //Si  photocopies <ou= à 10, le prix est simplement de 0.1
      facture = nbPhotocopies * 0.1;
    } else if (nbPhotocopies <= 30) {
      //Si nombre photocopies  compris <entre 11 et 30>, le prix est de 10 * 0.1 + (nbPhotocopies - 10) * 0.09
      facture = 10 * 0.1 + (nbPhotocopies - 10) * 0.09;
    // Les 10 premières photocopies coûtent 0.1 euro chacune, et les suivantes coûtent 0.09 euro chacune.
    } else {
      //Si le nombre de photocopies est supérieur à 30, le prix est de 10 * 0.1 + 20 * 0.09 + (nbPhotocopies - 30) * 0.08
      //Si le nombre de photocopies est supérieur à 30, le prix est de 10 * 0.1 + 20 * 0.09 + (nbPhotocopies - 30) * 0.08.
      facture = 10 * 0.1 + 20 * 0.09 + (nbPhotocopies - 30) * 0.08;//Les 10 premières photocopies coûtent 0.1 euro chacune, les 20 suivantes coûtent 0.09 euro chacune, et les suivantes coûtent 0.08 euro chacune.
    }
  // Affiche le résultat de la facture avec deux décimales
    let resultat = document.getElementById("resultat");
    resultat.innerHTML = "La facture est de " + facture.toFixed(2) + " €.";
  }
  
  function calculerHeure() {
    // Récupère  valeurs  l'heure,  minutes et secondes saisies 
    let heure = parseInt(document.getElementById("heure").value);
    let minutes = parseInt(document.getElementById("minutes").value);
    let secondes = parseInt(document.getElementById("secondes").value);

    // Ajoute 1 à la valeur des secondes
    secondes += 1;

    // Vérifie si on doit ajouter 1 à la valeur des minutes ou des heures
    if (secondes >= 60) {
      // Si secondes >ou= à 60,réinitialise secondes à 0 et ajoute 1 à la valeur des minutes
        secondes = 0;
        minutes += 1;
    }
    if (minutes >= 60) {
      // Si minutes >ou= à 60, réinitialise les minutes à 0 et ajoute 1 à la valeur de l'heure
        minutes = 0;
        heure += 1;
    }
    if (heure >= 24) {
      // Si l'heure est supérieure ou égale à 24, réinitialise l'heure à 0
        heure = 0;
    }

    // Affiche l'heure à la seconde suivante
    document.getElementById("resultat").innerHTML = "Il sera " + heure + "h" + minutes + "min" + secondes + "sec à la seconde suivante";
}

function calculerMonnaie() { // Récupère la valeur  montant du ticket et du montant donné
  let montantTicket = document.getElementById("montantTicket").value;
  let montantDonne = document.getElementById("montantDonne").value;
  let monnaie = montantDonne - montantTicket;// Calcule la monnaie à rendre
  // Initialise les variables pour compter les billets et les pièces à rendre
  let billets10 = 0;
  let billets5 = 0;
  let pieces1 = 0;

  // Compte le nombre de billets de 10€ à rendre
  if (monnaie >= 10) {
    billets10 = Math.floor(monnaie / 10);
    monnaie -= billets10 * 10;
  }
  //Compte le nombre de billets de 5€ à rendre
  if (monnaie >= 5) {
    billets5 = Math.floor(monnaie / 5);
    monnaie -= billets5 * 5;
  }
  // Compte le nombre de pièces de 1€ à rendre
  if (monnaie >= 1) {
    pieces1 = monnaie;
  }
  // Crée une chaîne de caractères pour afficher le résultat
  let resultat = "Monnaie à rendre :<br>";
  if (billets10 > 0) {
    resultat += billets10 + " billet(s) de 10€<br>";// Ajoute le nombre de billets de 10€ à la chaîne de caractères
  }
  if (billets5 > 0) {
    resultat += billets5 + " billet(s) de 5€<br>";// Ajoute le nombre de billets de 5€ à la chaîne de caractères
  }
  if (pieces1 > 0) {
    resultat += pieces1 + " pièce(s) de 1€<br>";// Ajoute le nombre de pièces de 1€ à la chaîne de caractères
  }
  // Affiche le résultat
  document.getElementById("resultat").innerHTML = resultat;
}


// Récupère la valeur de l'adresse e-mail saisie
function validateEmail() {
  let email = document.getElementById("email").value;
   // Vérifie si l'adresse e-mail contient un "@" et un "." 
  // et si le "." se trouve après le "@"
  if (email.indexOf("@") != -1 && email.indexOf(".") != -1 && email.indexOf(".") > email.indexOf("@")) {
    // Si l'adresse e-mail est valide, affiche un message indiquant qu'elle est valide
    document.getElementById("result").innerHTML = "Email valide.";
  } else {
    // Sinon, affiche un message indiquant qu'elle est invalide
    document.getElementById("result").innerHTML = "Email invalide.";
  }
}
// Ajoute un écouteur d'événements qui appelle la fonction validateEmail() à chaque fois que la touche est relâchée dans le champ e-mail
document.getElementById("email").addEventListener("keyup", validateEmail);


//exo6 sript sur html