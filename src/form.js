
/*
 Get fields
*/
const btnSubmit = document.getElementById("btn-submit2");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const gameOnParticipation = document.getElementById("gameOnParticipation");
const birthdate = document.getElementById("birthdate");
const conditionsAccepted = document.getElementById("conditionsAccepted");


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
        gameOnParticipation : "Si vous n\'avez jamais participé, indiquez \'0\'",
        city : "Vous devez choisir une option.",
        conditionsAccepted : "Vous devez accepter les termes et conditions"
    }
}


/*
 submit listener
*/
btnSubmit.addEventListener("click", submitEngine);


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
                toggleErrorMsg(input);

            }
            else {
                hideErrorMsg(input);
                formCheck.inputs.city = true;
            }
        }

        else if (input.toString() === "conditionsAccepted"){
            if (!conditionsAccepted.checked) {
                formCheck.inputs.conditionsAccepted = false;
                toggleErrorMsg(input);

            }
            else {
                hideErrorMsg(input);
                formCheck.inputs.conditionsAccepted = true;
            }
        }

}

function toggleErrorMsg (input){
    document.getElementById(input.toString() + "-msg").style.visibility = "visible";
    document.getElementById(input.toString() + "-msg").innerHTML = formCheck.messages[input];
}
function hideErrorMsg (input){
    document.getElementById(input.toString() + "-msg").style.visibility = "hidden";
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

/*
 Submit engine
*/
function submitEngine () {

    for (let input in formCheck.inputs) {

            // On test l'input
            checkInputs(input);


            // On vérifie si tout a été validé
            formCheckIsValid();


    }
    if (formCheck.global){
        console.log("youpi");
    }
    //console.log(formCheck);
}






// Envoi vers webpack

window.formCheck = formCheck;
window.submitEngine = submitEngine;