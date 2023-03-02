const livre1 = {
  titre: "Les Misérables",
  auteur: "Victor Hugo",
  anneePublication: 1862,
};

const livre2 = {
  titre: "Le Rouge et le Noir",
  auteur: "Stendhal",
  anneePublication: 1830,
};

const livre3 = {
  titre: "Le Rouge et le Noir",
  auteur: "Stendhal",
  anneePublication: 1830,
};

const livre4 = {
  titre: "Le Rouge et le Noir",
  auteur: "Stendhal",
  anneePublication: 1830,
};

const livre5 = {
  titre: "Le Rouge et le Noir",
  auteur: "Stendhal",
  anneePublication: 1830,
};

const bibliotheque = [livre1, livre2, livre3, livre4, livre5];

for (let i = 0; i < bibliotheque.length; i++) {
  console.log(bibliotheque[i].titre);
  console.log(bibliotheque[i].auteur);
  console.log(bibliotheque[i].anneePublication);
}
