# exoJS
SUJETS

Exercice1:
Les habitants de Zorglub paient l'impôt selon les règles suivantes :
Les hommes de plus de 20 ans paient l'impôt.
Les femmes paient l'impôt si elles ont entre 18 et 35 ans.
Les autres ne paient pas d'impôt.
(indices:    .let element = document.getElementById(id);
             .getElementById permet d'interagir avec l'id d'un élément Html
             .Ajoutez du texte dans la page Html avec innerHTML .
             .const content = element.innerHTML;
             .Écouter un événement avec addEventListener())



Exercice2:
Un magasin de reprographie facture :
0,10 € les dix premières photocopies.
0,09 € les vingt suivantes.
Et 0,08 € au-delà.
Écrivez un programme en JavaScript  qui demande à l'utilisateur le nombre de photocopies qu'il souhaite effectuer et qui affiche par la suite la facture correspondante.
(indices:    .let element = document.getElementById(id);
             .getElementById permet d'interagir avec l'id d'un élément Html
             .Ajoutez du texte dans la page Html avec innerHTML .
             .const content = element.innerHTML;
             .Écouter un événement avec addEventListener())

Exercice3:
Écrire un programme en JavaScript qui va demander à un utilisateur une heure , puis les minutes et enfin les secondes.
Votre programme affichera l'heure qu'il sera à la seconde suivante.
Nous partons du principe que l'heure saisie par l'utilisateur est valide !
Exemple :Heure saisie : 17h30min22sec
Le programme affichera : 17h30min23sec.
(indices:    .La fonction parseInt() converti un string (chaîne de caractère) en int (entier)).




Exercice4:
Créer une application qui calcule la monnaie à rendre.
Saisissez le montant du ticket à payer.
Saisissez la somme que le client a donné.
Simulez la remise de la monnaie en affichant le nombre de billet de "10 Euros", "5 Euros" et de pièces de "1 Euro".
Nous partons du principe que les montants sont des entiers.
(indices:            .let element = document.getElementById(id);
                     .getElementById permet d'interagir avec l'id d'un élément Html
                     .Ajoutez du texte dans la page Html avec innerHTML .
                     .const content = element.innerHTML;
                     .Écouter un événement avec addEventListener())


Exercice5:
Écrire un programme en JavaScript qui demande à un utilisateur de saisir une adresse email via un formulaire
exemple : monadresse@mail.com
Votre programme doit déterminer si l'adresse fournit par l'utilisateur est valide ou non.
Pour ce faire analysez la chaîne de caractère saisie et trouver si il y a bien la présence d'un "@" et d'un "."
Assurez-vous que le point soit bien présent derrière l'arrobase.
Trouvez le moyen de vérifier l'email sans bouton pour votre formulaire.
Attention : N'utilisez pas le type 'email' dans l'input de votre champ de saisi.
(indices:       .   La fonction "indexOf()" renvoi la position de la première occurrence d'un 
                   caractère donné.La fonction retournera -1 si le caractère est introuvable 
                .   La fonction "includes()" est utilisé pour déterminer si un élément existe 
                      dans une chaîne de caractère.la fonction renvoie true si cette liste 
                       contient l'élément spécifié. 
		    .   La fonction "substring()" est utilisé pour couper une chaîne de caractère.
                . keydown ou keyup  Récupère la saisie du clavier après pression de la touche 
                    immédiatement avec Keyup ou au moment du relâchement de la touche avec  
                          Keydown.



Exercice6:
Une compagnie d'assurance automobile propose à ses clients quatre familles de tarifs identifiables par une couleur, du moins au plus onéreux : tarifs bleu, vert, orange et rouge.
Le tarif dépend de la situation du conducteur :
• un conducteur de moins de 25 ans et titulaire du permis depuis moins de deux ans, se voit attribuer le tarif rouge, si toutefois il n'a jamais été responsable d'accident. Sinon, la compagnie refuse de l'assurer.
• un conducteur de moins de 25 ans et titulaire du permis depuis plus de deux ans, ou de plus de 25 ans mais titulaire du permis depuis moins de deux ans a le droit au tarif orange s'il n'a jamais provoqué d'accident, au tarif rouge pour un accident, sinon il est refusé.
• un conducteur de plus de 25 ans titulaire du permis depuis plus de deux ans bénéficie du tarif vert s'il n'est à l'origine d'aucun accident et du tarif orange pour un accident, du tarif rouge pour deux accidents, et refusé au-delà.
• De plus, pour encourager la fidélité des clients acceptés, la compagnie propose un contrat de la couleur immédiatement la plus avantageuse s'il est entré dans la maison depuis plus d'un an.
Dans tous les cas on refuse un conducteur qui aurait plus de 3 accidents.
(DOIT INCLURE:  
*let element = document.getElementById(id);getElementById permet d'interagir avec l'id d'un élément Html.
*Ajoutez du texte dans la page Html avec innerHTML .const content = element.innerHTML
*Écouter un événement avec addEventListener()

