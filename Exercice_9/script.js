/* Tout d'abord, nous sélectionnons les éléments HTML dont nous avons besoin à l'aide 
des méthodes document.querySelector() et document.getElementById(). 
La constante form contient l'élément <form> du HTML. Les constantes telephoneInput et 
emailInput contiennent les éléments <input> du HTML correspondant aux champs "Téléphone" et "E-mail".
Les constantes telephoneError et emailError contiennent les éléments <span> du HTML où les 
messages d'erreur pour les champs "Téléphone" et "E-mail" seront affichés. */

const form = document.querySelector("form");
const telephoneInput = document.getElementById("telephone");
const telephoneError = document.getElementById("telephone-error");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

/* Ensuite, vous pouvez ajouter une vérification de champ vide dans la fonction de validation JavaScript. 
Pour ce faire, vous pouvez vérifier si la valeur des champs "nom" et "prénom" est vide ou non en utilisant 
la méthode trim(), qui supprime les espaces vides en début et fin de chaîne. 
Si la valeur est vide, vous pouvez ajouter un message d'erreur à la liste d'erreurs.*/

function validateForm() {
  var errors = "";
  var nom = document.getElementById("nom").value.trim();
  var prenom = document.getElementById("prenom").value.trim();

  if (nom === "") {
    errors += "Le nom est obligatoire.\n";
    document.getElementById("nom").focus();
  }

  if (prenom === "") {
    errors += "Le prénom est obligatoire.\n";
    document.getElementById("prenom").focus();
  }

  var telephone = document.getElementById("telephone").value;
  s;
  // Validation du numéro de téléphone

  var email = document.getElementById("email").value;
  // Validation de l'adresse email

  if (errors !== "") {
    alert(errors);
    return false;
  }

  // Validation réussie
  return true;
}

/* Ensuite, nous ajoutons un écouteur d'événements sur l'événement de soumission du formulaire (submit)
à l'aide de la méthode addEventListener(). Lorsque le formulaire est soumis, l'événement est déclenché et 
la fonction de rappel est exécutée. Nous empêchons le comportement par défaut du formulaire à l'aide de la 
méthode event.preventDefault() pour que la page ne se recharge pas.
Nous récupérons les valeurs des champs "Téléphone" et "E-mail" à l'aide des propriétés value des éléments correspondants. */

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const telephone = telephoneInput.value;
  const email = emailInput.value;

  if (!validateTelephone(telephone)) {
    telephoneInput.classList.add("error");
    telephoneError.textContent = "Le numéro de téléphone n'est pas valide";
    telephoneInput.focus(); // Renvoi directement le curseur sur le champs erreur.
    return;
  } else {
    telephoneInput.classList.remove("error");
    telephoneError.textContent = "";
  }

  if (!validateEmail(email)) {
    emailInput.classList.add("error");
    emailError.textContent = "L'adresse e-mail n'est pas valide";
    emailInput.focus(); //  Renvoi directement le curseur sur le champs erreur.
    return;
  } else {
    emailInput.classList.remove("error");
    emailError.textContent = "";
  }

  // Envoyer le formulaire si tout est valide
  form.submit();
});

/* Nous validons ensuite les valeurs des champs "Téléphone" et "E-mail" à l'aide des fonctions validateTelephone() et 
validateEmail(). Si la valeur n'est pas valide, nous ajoutons la classe CSS error au champ et nous affichons un 
message d'erreur dans le <span> correspondant. Nous utilisons également la méthode focus() pour déplacer le curseur sur
le champ d'erreur. Si la valeur est valide, nous supprimons la classe error du champ et nous effaçons le message d'erreur.
Si toutes les valeurs sont valides, nous appelons la méthode submit() sur l'élément <form> pour envoyer le formulaire */

/* Enfin, les fonctions validateTelephone() et validateEmail() sont définies pour valider les valeurs des champs " */

function validateTelephone(telephone) {
  const re = /^\d{10}$/;
  return re.test(telephone);
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/* ^ : indique le début de la chaîne de caractères à valider.

[^\s@]+ : correspond à un ou plusieurs caractères ne contenant pas d'espace ou de caractère @. 
Cela garantit qu'il n'y a pas d'espaces dans l'adresse e-mail et qu'il y a au moins un caractère avant le symbole "@".

@ : correspond au caractère "@".

[^\s@]+ : correspond à un ou plusieurs caractères ne contenant pas d'espace ou de caractère "@". 
Cela garantit qu'il n'y a pas d'espaces dans l'adresse e-mail et qu'il y a au moins un caractère après le symbole "@".

\. : correspond au caractère ".". Notez que le caractère "." doit être échappé avec un antislash () car 
il a une signification spéciale en expression régulière.

[^\s@]+ : correspond à un ou plusieurs caractères ne contenant pas d'espace ou de caractère "@". 
Cela garantit qu'il n'y a pas d'espaces dans le domaine de l'adresse e-mail et qu'il y a au moins un caractère après le ".".

$ : indique la fin de la chaîne de caractères à valider.
Ainsi, cette expression régulière vérifie que l'adresse e-mail contient au moins un caractère avant et 
après le symbole "@", qu'il y a un "." dans le domaine de l'adresse e-mail et qu'il n'y a pas d'espaces. */

// PLUS D'INFORMATIONS //

/* 
L'OPERATEUR += 

L'opérateur += est un opérateur d'assignation composé en JavaScript. Il est utilisé pour ajouter la valeur de 
droite à la valeur de gauche et stocker le résultat dans la variable de gauche.
En d'autres termes, a += b est équivalent à a = a + b.

Par exemple, si a est égal à 2 et b est égal à 3, alors a += b ajoute b à a et stocke le résultat (5) dans a.
Cet opérateur peut également être utilisé avec d'autres types de données, tels que les chaînes de caractères. 
Dans ce cas, il concatène la chaîne de caractères de droite à la chaîne de caractères de gauche.
Par exemple, si a est égal à "Hello" et b est égal à " world!", alors a += b concatène b à a et 
stocke le résultat ("Hello world!") dans a.

L'OPERATEUR !==

L'opérateur !== est un opérateur de comparaison strict en JavaScript. Il compare deux valeurs pour déterminer 
si elles sont différentes et si elles ont également des types différents.

Par exemple, 3 !== "3" retourne true, car 3 est un nombre et "3" est une chaîne de caractères. 
En revanche, 3 != "3" retourne false, car l'opérateur != ne vérifie pas le type de données.
De manière générale, vous pouvez utiliser !== pour effectuer des comparaisons strictes entre deux valeurs en JavaScript. 
Il est recommandé d'utiliser !== au lieu de != dans la plupart des cas, car cela peut éviter des erreurs dans 
votre code en garantissant que les types de données sont également comparés.

*/
