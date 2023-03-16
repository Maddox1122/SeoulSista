const openOverlayButtons = document.querySelectorAll('.openOverlay');
const annuleren = document.querySelectorAll('.annuleren');
const confirm = document.querySelectorAll('.confirmtext');
let aantalInputs = document.querySelectorAll(".aantal");
let prijsElementen = document.querySelectorAll(".Prijs");
const prijzen = [21.99, 14.99, 17.99, 19.99, 24.99, 34.99, 28.99, 9.99];


openOverlayButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetOverlayId = button.getAttribute('data-target');
    const targetOverlay = document.querySelector(targetOverlayId);

    targetOverlay.classList.remove('hidden');
  });
});

annuleren.forEach((button) => {
    button.addEventListener('click', () => {
        const annulerenId = button.getAttribute('data-target');
        const annulerenBestel = document.querySelector(annulerenId);

        annulerenBestel.classList.add('hidden');
    })
})

aantalInputs.forEach(function(aantalInput, index) {
  aantalInput.addEventListener("input", function() {
    let aantal = aantalInput.value;

    let nieuwePrijs = prijzen[index] * aantal;

    prijsElementen[index].textContent = "Prijs: €" + nieuwePrijs.toFixed(2) + "PP";
  });
});

// confirm.forEach((button) => {
//     button.addEventListener('click', () => {
//         const Bestel = button.getAttribute('data-target');
//         const Bestellen = button.getAttribute(Bestel);


//     })
// })