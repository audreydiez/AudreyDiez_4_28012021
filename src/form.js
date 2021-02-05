
/*
 Get fields
*/
const btnSubmit = document.getElementById("btn-submit");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const gameOnParticipation = document.getElementById("gameOnParticipation");
const birthdate = document.getElementById("birthdate");
const conditionsAccepted = document.getElementById("conditionsAccepted");
const radiosBtns = document.querySelectorAll("input[type=radio]")

const modalBody = document.getElementById("modal-body");
const modalPassed = document.getElementById("modal-passed");

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.getElementById("sign-up");
const modalCloseBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const modalContent = document.getElementById("content");
const nextEvent = document.getElementById("nextEvent");


const formValues = {
    firstName : '',
    lastName : '',
    email : '',
    birthdate : '',
    gameOnParticipation : '',
    city : '',
    conditionsAccepted : false,
    nextEventsSub : false
}

const formCheck = {
    global : false,
    inputs : {
        firstName : false,
        lastName : false,
        email : false,
        birthdate : false,
        gameOnParticipation : false,
        city : false,
        conditionsAccepted : false
    },
    messages : {
        firstName : "Votre prénom doit contenir au moins deux caractères.",
        lastName : "Votre nom doit contenir au moins deux caractères.",
        email : "Vous devez entrer un email valide.",
        birthdate : "Vous devez entrer une date de naissance",
        gameOnParticipation : "Si vous n\'avez jamais participé, indiquez \'0\'.",
        city : "Vous devez choisir une option.",
        conditionsAccepted : "Vous devez accepter les termes et conditions"
    }
}


/*
 submit listener
*/

function checkInputs (input) {

        if (input.toString() === "firstName"){

            if (firstName.value.length < 2){
                formCheck.inputs.firstName = false;
                toggleErrorMsg(input);
            }
            else {
                hideErrorMsg(input);
                formCheck.inputs.firstName = true;
            }
            console.log("first testé " + formCheck.inputs[input] );
        }

        else if (input.toString() === "lastName"){

            if (lastName.value.length < 2){
                formCheck.inputs.lastName = false;
                toggleErrorMsg(input);
            }
            else {
                hideErrorMsg(input);
                formCheck.inputs.lastName = true;
            }
            console.log("last testé " + formCheck.inputs[input] );
        }

        else if (input.toString() === "email"){
            let matchEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!matchEmail.test(email.value)) {
                formCheck.inputs.email = false;
                toggleErrorMsg(input);

            }
            else {
                formCheck.inputs.email = true;
                hideErrorMsg(input);
            }
        }

        else if (input.toString() === "birthdate"){

            if (birthdate.value === '') {
                formCheck.inputs.birthdate = false;
                toggleErrorMsg(input);

            }
            else {
                formCheck.inputs.birthdate = true;
                hideErrorMsg(input);
            }
        }

        else if (input.toString() === "gameOnParticipation"){

            if (gameOnParticipation.value === '') {
                formCheck.inputs.gameOnParticipation = false;
                toggleErrorMsg(input);

            }
            else {
                formCheck.inputs.gameOnParticipation = true;
                hideErrorMsg(input);
            }
        }

        else if (input.toString() === "city"){
            let cityRadioBlock = document.querySelectorAll('input[type="radio"]:checked');
            if (cityRadioBlock.length !== 1 ) {
                formCheck.inputs.city = false;
                toggleErrorMsg(input, false);

            }
            else {
                hideErrorMsg(input, false);
                formCheck.inputs.city = true;
            }
        }

        else if (input.toString() === "conditionsAccepted"){
            if (!conditionsAccepted.checked) {
                formCheck.inputs.conditionsAccepted = false;
                toggleErrorMsg(input, false);

            }
            else {
                hideErrorMsg(input, false);
                formCheck.inputs.conditionsAccepted = true;
            }
        }

}

function toggleErrorMsg (input, border = true){
    let element = document.getElementById(input.toString() + "-msg");
    element.style.visibility = "visible";
    if (border) eval(input).style.border = "2px solid #fe142f";
    element.innerHTML = formCheck.messages[input];

}
function hideErrorMsg (input,border = true){
    let element = document.getElementById(input.toString() + "-msg");
    element.style.visibility = "hidden";
    if (border) eval(input).style.border = "2px solid transparent";
}


function formCheckIsValid(){
    // On suppose que tout est bon
    formCheck.global = true;

    // Si jamais un seul est pas bon, on passe global en false
    for (let input in formCheck.inputs) {
        if (!formCheck.inputs[input]){
            formCheck.global = false;
        }
    }
    console.log("global "+ formCheck.global);
}


function displayPassedMessage (){

    modalBody.style.left = parseFloat(getComputedStyle(modalBody).left) + -100 + '%';
    setTimeout(function(){
        modalPassed.style.display = "block";
        }, 400);

    // On transforme le bouton en close
    btnSubmit.removeEventListener("click", submitEngine);
    btnSubmit.addEventListener("click",closeModal);

}

/*
 Submit engine
*/
function submitEngine (e) {
    e.preventDefault();

    for (let input in formCheck.inputs) {

            // On test l'input
            checkInputs(input);


            // On vérifie si tout a été validé
            formCheckIsValid();


    }
    if (formCheck.global){
        displayPassedMessage();
        initForm();
        initErrorMsg();
        btnSubmit.innerText = "Fermer";
        console.log("youpi");

    }
    //console.log(formCheck);
}






// Hamburger menu on small device
function editNav() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

console.log(modalCloseBtn);
// launch & close modal basic
modalBtn.addEventListener("click", launchModal);
modalCloseBtn.addEventListener("click", closeModal);


// Fermeture de la modal au click sur le background
modalContent.addEventListener('click', (e) => e.stopPropagation());
modalBg.addEventListener('click',  closeModal);


// launch & close function
function launchModal() {

    modalBg.style.display = "block";

    // MARCHE PAS

    btnSubmit.addEventListener("click", submitEngine);
    btnSubmit.removeEventListener("click", closeModal);
    btnSubmit.innerHTML = "C'est Parti";
}
function closeModal() {


    modalBody.style.left = "0";
    modalBg.style.display = "none";
    modalPassed.style.display = "none";


}
function initForm() {


    // Pour chaque input, mettre value à ""
    for (let input in formCheck.inputs) {
        if(input.toString() === "city"){
            for (let i = 0; i < radiosBtns.length; i++)
            {
                radiosBtns[i].checked = false;
            }
        }
        else if (input.toString() === "conditionsAccepted"){
            conditionsAccepted.checked = true;
        }
        else {
            eval(input).value = "";
        }
        input = false;
        nextEvent.checked = false;
    }
    formCheck.global = false;

}
function initErrorMsg() {

    // Pour chaque input, enlever les messages d'erreurs

    for (let input in formCheck.inputs) {

        if(input.toString() === "city" || input.toString() === "conditionsAccepted"){
            hideErrorMsg(input, false);
        }
        else {
            hideErrorMsg(input);
        }
    }







}

// Envoi vers webpack
window.editNav = editNav;
window.formCheck = formCheck;
window.submitEngine = submitEngine;