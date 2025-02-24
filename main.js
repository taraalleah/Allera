const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

//Not sure what I did wrong to not show the X mark when the menu is toggled
menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-fill" : "ri-menu-fill"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-fill");
});

const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_content h2",{
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header_btn",{
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".contact_image img",{
    ...scrollRevealOption,
});
