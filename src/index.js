import "./assets/scss/style.scss";
import "./form.js";

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const modalContent = document.getElementById("content");

// Hamburger menu on small device
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// launch & close modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn.addEventListener("click", closeModal);



modalContent.addEventListener('click', (e) => e.stopPropagation())

modalBg.addEventListener('click', () => {
    closeModal();
})

// launch & close function
function launchModal() {
    modalBg.style.display = "block";
}
function closeModal() {
    modalBg.style.display = "none";
}


window.editNav = editNav;