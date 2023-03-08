const menu = document.querySelector(".hamburger");
const nav = document.querySelector(".navlist");

menu.addEventListener('click', () => {
    nav.classList.remove(".max-[430px]:hidden")
    nav.classList.add(".block")
    console.log("hallo")
})