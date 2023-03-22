const OpenOverlayButtons = document.querySelectorAll(".openOverlay");
const Sluiten = document.querySelectorAll(".Sluiten");
const AantalInputs = document.querySelectorAll(".aantal");
const PrijsElementen = document.querySelectorAll(".Prijs");
const Prijzen = [21.99, 14.99, 17.99, 19.99, 24.99, 34.99, 28.99, 9.99];
const Toevoegen = document.querySelectorAll(".toevoegen");
const Verwijderen = document.querySelectorAll(".verwijderen");
const Winkelmandje = document.querySelector(".winkelmandje");
const WinkelMandjeToggle = document.querySelector(".winkelmandjetoggle");
const Totaal = document.querySelector(".totaal");
const Afrekenen = document.querySelector('.afrekenen');

OpenOverlayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const TargetOverlayId = button.getAttribute("data-target");
    const TargetOverlay = document.querySelector(TargetOverlayId);

    TargetOverlay.classList.remove("hidden");
  });
});

Sluiten.forEach((button) => {
  button.addEventListener("click", () => {
    const SluitenID = button.getAttribute("data-target");
    const SluitenInfo = document.querySelector(SluitenID);

    SluitenInfo.classList.add("hidden");
  });
});

function updateTotaal() {
  let totaalPrijs = 0;
  PrijsElementen.forEach(function (prijsElement, index) {
    let Aantal = AantalInputs[index].value;
    let NieuwePrijs = Prijzen[index] * Aantal - Prijzen[index];
    prijsElement.textContent = "Prijs: €" + NieuwePrijs.toFixed(2) + "PP";
    totaalPrijs += NieuwePrijs;
  });
  Totaal.value = (totaalPrijs).toFixed(2);
}

AantalInputs.forEach(function (aantalInput) {
  aantalInput.addEventListener("input", function () {
    updateTotaal();
  });
});

WinkelMandjeToggle.addEventListener("click", () => {
  if (Winkelmandje.classList.contains("translate-x-[20rem]")) {
    Winkelmandje.classList.remove("translate-x-[20rem]");
  } else {
    Winkelmandje.classList.add("translate-x-[20rem]");
  }
});

Toevoegen.forEach((button, index) => {
  button.addEventListener("click", () => {
    const ToevoegenId = button.getAttribute("data-target");
    const ToevoegenMandje = document.querySelector(ToevoegenId);

    ToevoegenMandje.classList.remove("hidden");

    alert("Toegevoegd");

    Totaal.value = (
      parseFloat(Totaal.value) = parseFloat(Prijzen[index])
    ).toFixed(2);

    updateTotaal();
  });
});

Verwijderen.forEach((button) => {
  button.addEventListener("click", () => {
    const VerwijderenId = button.getAttribute("data-target");
    const VerwijderenMandje = document.querySelector(VerwijderenId);

    VerwijderenMandje.classList.add("hidden");

    alert("Verwijderd");
  });
});

Afrekenen.addEventListener('click', () => {
  let OrderDetails = `Bedankt voor uw bestelling \n Uw totaal is: &#x20AC;${Totaal.value},-`;

  alert(OrderDetails);
})
