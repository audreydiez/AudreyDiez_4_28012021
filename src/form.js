import { closeModal } from "./index";

/*
 Get fields
*/

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const gameOnParticipation = document.getElementById("gameOnParticipation");
const birthdate = document.getElementById("birthdate");
const conditionsAccepted = document.getElementById("conditionsAccepted");
const radiosBtns = document.querySelectorAll("input[type=radio]")
const nextEvent = document.getElementById("nextEvent");

/*
 Get DOM
*/
export const btnSubmit = document.getElementById("btn-submit");
export const modalBody = document.getElementById("modal-body");
export const modalPassed = document.getElementById("modal-passed");

/*
 Validation globale
*/
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
        gameOnParticipation : "Si vous n'avez jamais participé, indiquez '0'.",
        city : "Vous devez choisir une option.",
        conditionsAccepted : "Vous devez accepter les termes et conditions"
    }
}


/*
 Vérification de tous les inputs
*/

function checkInputs (input) {

        if (input.toString() === "firstName"){

            // Deux caractères de a à z avec possibilité de tirets et d'espaces entre deux mots sauf au début du string
            let matchName = /^(?=.{2,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;
            if (!matchName.test(firstName.value)) {
                formCheck.inputs.firstName = false;
                toggleErrorMsg(input);
            }
            else {
                formCheck.inputs.firstName = true;
                hideErrorMsg(input);
            }

        }

        else if (input.toString() === "lastName"){

            let matchLastName = /^(?=.{2,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;
            if (!matchLastName.test(lastName.value)) {
                formCheck.inputs.lastName = false;
                toggleErrorMsg(input);
            }
            else {
                formCheck.inputs.lastName = true;
                hideErrorMsg(input);
            }

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


            // autorise des chiffres à partir de 0 uniquement
            let matchGameParticipation = /^[0-9]\d*$/;
            if (!matchGameParticipation.test(gameOnParticipation.value)) {
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
    //console.log("global "+ formCheck.global);
}


function displayPassedMessage (){
    // Affichage "Merci pour votre inscription"
    modalBody.style.left = parseFloat(getComputedStyle(modalBody).left) + -100 + '%';
    setTimeout(function(){
        modalPassed.style.display = "block";
        }, 400);

    // On transforme le bouton en close
    btnSubmit.removeEventListener("click", submitEngine);
    btnSubmit.addEventListener("click",closeModal);
    btnSubmit.innerText = "Fermer";

}

/*
 Moteur de validation du formulaire
*/
export function submitEngine () {

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


    }
    //console.log(formCheck);
}




// launch & close function

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
        // On reset la case "prévenu pour les prochains event"
        nextEvent.checked = false;

        // On reset l'objet formCheck
        input = false;
    }
    formCheck.global = false;

}
export function initErrorMsg() {

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
window.formCheck = formCheck;
window.submitEngine = submitEngine;