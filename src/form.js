
/*
 Get fields
*/
const btnSubmit = document.getElementById("btn-submit2");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");

const formCheck = {
    global : false,
    inputs : {
        firstName : false,
        lastName : false
    },
    messages : {
        firstName : "Votre prénom doit contenir au moins deux caractères.",
        lastName : "Votre nom doit contenir au moins deux caractères."
    }

}

//Debug mode (quand l'user a déja validé mais faux)
let showError = false;

/*
 submit listener
*/
btnSubmit.addEventListener("click", submitEngine);
/*
 Events listener
*/
// firstName.addEventListener("input", function (){
//     checkFirstName(firstName);
// });
// lastName.addEventListener("input", function (){
//     checkLastName(lastName);
// });

/*
 Functions
*/
// function checkFirstName(inputToCheck){
//     inputToCheck.value.length < 2 ? formCheck.inputs.firstName = false : formCheck.inputs.firstName = true ;
// }
// function checkLastName(inputToCheck){
//     inputToCheck.value.length < 2 ? formCheck.inputs.lastName = false : formCheck.inputs.lastName = true ;
// }

function checkInputs (input) {
    // switch (input){
    //     case  "firstName" :
    //         firstName.value.length < 2 ? formCheck.inputs.firstName = false : formCheck.inputs.firstName = true ;
    //     case  "firstName" :
    //         lastName.value.length < 2 ? formCheck.inputs.firstName = false : formCheck.inputs.firstName = true ;
    //
    // }




        if (input.toString() === "firstName"){
            firstName.value.length < 2 ? formCheck.inputs.firstName = false : formCheck.inputs.firstName = true ;
            console.log("first testé " + formCheck.inputs[input] );
        }
        else if (input.toString() === "lastName"){
            lastName.value.length < 2 ? formCheck.inputs.lastName = false : formCheck.inputs.lastName = true ;
            console.log("last testé " + formCheck.inputs[input] );
        }






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

    // Test si tous les champs sont true
    for (let input in formCheck.inputs) {
        // Si global est faux
        if (!formCheck.global) {

            // On test l'input
            checkInputs(input);
            // On vérifie si tout a été validé
            formCheckIsValid();
        }

        if (formCheck.global){
            console.log("youpi");
            break;
        }

    }



    // Si le formulaire est invalide
    // if (!formCheck.global){
    //
    //     // On test chaque input
    //     for (let input in formCheck.inputs) {
    //
    //         checkInputs(input);
    //         //console.log(input + " -> " + formCheck.inputs[input]);
    //
    //
    //     }
    // }

}


// Envoi vers webpack
window.formCheck = formCheck;
window.submitEngine = submitEngine;