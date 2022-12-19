// Open and Close Navigation
let navigation = document.querySelector(".header nav .nav");
let openMenuBtn = document.getElementById("openMenuBtn");
let closeMenuBtn = document.getElementById("closeMenuBtn");

openMenuBtn.addEventListener("click", () => {
    navigation.classList.add("open-nav");
    openMenuBtn.classList.add("open-menu-btn");
    closeMenuBtn.classList.add("open-menu-btn");
})

closeMenuBtn.addEventListener("click", () => {
    navigation.classList.remove("open-nav");
    openMenuBtn.classList.remove("open-menu-btn");
    closeMenuBtn.classList.remove("open-menu-btn");
})

// Dropdown toggle
let dropdownToggle = document.querySelector(".header nav .dropdown-toggle");
let dropdown = document.querySelector(".header nav .dropdown");

dropdownToggle.addEventListener("click", () => {
    dropdown.classList.toggle("open-dropdown");
})

let header = document.getElementById("header");
window.onscroll = () => {
    (window.scrollY >= 20) ?
        header.classList.add("fixed-header") :
        header.classList.remove("fixed-header");
}