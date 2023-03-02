const form = document.querySelector("form");
const nameField = document.querySelector("#name");

function validateForm(e) {
  if (nameField.value.trim() === "") {
    e.preventDefault();
    alert("Le champs de saisie est vide");
  }
}

form.addEventListener("submit", validateForm);
