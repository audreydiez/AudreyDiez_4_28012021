import "./assets/scss/style.scss";
import { btnSubmit, modalPassed,modalBody,  initErrorMsg } from "./form";


// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".btn-signup");
const modalCloseBtn = document.getElementById("close-icon");
const formData = document.querySelectorAll(".formData");
const modalContent = document.getElementById("content");



// Hamburger menu on small device
function editNav() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// launch & close modal basic
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//modalBtn.addEventListener("click", launchModal);
modalCloseBtn.addEventListener("click", closeModal);


// Fermeture de la modal au click sur le background
modalContent.addEventListener('click', (e) => e.stopPropagation());
modalBg.addEventListener('click',  closeModal);



function launchModal() {
    modalBg.style.display = "block";

    btnSubmit.removeEventListener("click", closeModal);
    btnSubmit.innerHTML = "C'est Parti";
    btnSubmit.addEventListener("click", submitEngine);
    initErrorMsg();

}

export function closeModal() {

    modalBody.style.left = "0";
    modalBg.style.display = "none";
    modalPassed.style.display = "none";
}



// Envoi vers webpack
window.editNav = editNav;