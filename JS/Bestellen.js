const OpenOverlayButtons = document.querySelectorAll(".openOverlay");
const Sluiten = document.querySelectorAll(".Sluiten");
const AantalInputs = document.querySelectorAll(".aantal");
const PrijsElementen = document.querySelectorAll(".Prijs");
const Prijzen = [21.99, 14.99, 17.99, 19.99, 24.99, 34.99, 28.99, 9.99];
const Toevoegen = document.querySelectorAll(".toevoegen");
const Verwijderen = document.querySelectorAll(".verwijderen");
const Winkelmandje = document.querySelector(".winkelmandje");
const WinkelMandjeToggle = document.querySelector(".winkelmandjetoggle");
const Totaal = document.querySelector('.totaal');

OpenOverlayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const TargetOverlayId = button.getAttribute("data-target");
    const TargetOverlay = document.querySelector(TargetOverlayId);

    TargetOverlay.classList.remove("hidden");
  });
});

Sluiten.forEach((button) => {
  button.addEventListener("click", () => {
    const SluitenId = button.getAttribute("data-target");
    const SluitenBestel = document.querySelector(SluitenId);

    SluitenBestel.classList.add("hidden");
  });
});

AantalInputs.forEach(function (aantalInput, index) {
  aantalInput.addEventListener("input", () => {
    let Aantal = aantalInput.value;

    let NieuwePrijs = Prijzen[index] * Aantal;

    PrijsElementen[index].textContent = "€" + NieuwePrijs.toFixed(2) + "PP";
  });
});


WinkelMandjeToggle.addEventListener("click", () => {
  if (Winkelmandje.classList.contains("translate-x-[20rem]")) {
    Winkelmandje.classList.remove("translate-x-[20rem]");
  } else {
    Winkelmandje.classList.add("translate-x-[20rem]");
  }
});

Toevoegen.forEach((button) => {
  button.addEventListener('click', () => {
    const ToevoegenId = button.getAttribute("data-target");
    const ToevoegenMandje = document.querySelector(ToevoegenId);

    ToevoegenMandje.classList.remove('hidden');

    alert("Toegevoegd");
  })
})

Verwijderen.forEach((button) => {
  button.addEventListener('click', () => {
    const VerwijderenId = button.getAttribute("data-target");
    const VerwijderenMandje = document.querySelector(VerwijderenId);

    VerwijderenMandje.classList.add('hidden');

    alert("Verwijderd");
  })
})
