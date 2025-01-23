const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.getElementById("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
});