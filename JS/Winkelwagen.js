const openOverlayButtons = document.querySelectorAll('.openOverlay');
const annuleren = document.querySelectorAll('.annuleren');
const confirm = document.querySelectorAll('.confirmtext');

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

// confirm.forEach((button) => {
//     button.addEventListener('click', () => {
//         const Bestel = button.getAttribute('data-target');
//         const Bestellen = button.getAttribute(Bestel);


//     })
// })