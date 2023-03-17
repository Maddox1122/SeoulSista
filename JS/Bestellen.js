const OpenOverlayButtons = document.querySelectorAll(".openOverlay");
const Annuleren = document.querySelectorAll(".annuleren");
const Confirm = document.querySelectorAll(".confirmtext");
let AantalInputs = document.querySelectorAll(".aantal");
let PrijsElementen = document.querySelectorAll(".Prijs");
const Prijzen = [21.99, 14.99, 17.99, 19.99, 24.99, 34.99, 28.99, 9.99];
const Toevoegen = document.querySelectorAll(".toevoegen");
const Verwijderen = document.querySelectorAll(".verwijderen");
const Winkelmandje = document.querySelector(".winkelmandje");

OpenOverlayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const TargetOverlayId = button.getAttribute("data-target");
    const TargetOverlay = document.querySelector(TargetOverlayId);

    TargetOverlay.classList.remove("hidden");
  });
});

Annuleren.forEach((button) => {
  button.addEventListener("click", () => {
    const AnnulerenId = button.getAttribute("data-target");
    const AnnulerenBestel = document.querySelector(AnnulerenId);

    AnnulerenBestel.classList.add("hidden");
  });
});

AantalInputs.forEach(function (aantalInput, index) {
  aantalInput.addEventListener("input", function () {
    let Aantal = aantalInput.value;

    let NieuwePrijs = Prijzen[index] * Aantal;

    PrijsElementen[index].textContent =
      "Prijs: €" + NieuwePrijs.toFixed(2) + "PP";
  });
});

Toevoegen.forEach((button) => {
  button.addEventListener("click", () => {
    const AnnulerenId = button.getAttribute("data-target");
    const AnnulerenBestel = document.querySelector(AnnulerenId);

    AnnulerenBestel.classList.add("hidden");
  });
});

Verwijderen.forEach((button) => {
  button.addEventListener("click", () => {
    const AnnulerenId = button.getAttribute("data-target");
    const AnnulerenBestel = document.querySelector(AnnulerenId);

    AnnulerenBestel.classList.add("hidden");
  });
});

Winkelmandje.addEventListener("click", () => {});
