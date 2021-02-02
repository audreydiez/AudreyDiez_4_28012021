import "./assets/scss/style.scss";

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

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

// launch & close modal form
function launchModal() {
    modalbg.style.display = "block";
}
function closeModal() {
    modalbg.style.display = "none";
}


window.editNav = editNav;