/*//Implémenter le JS de ma page

const inputNom = document.getElementById("NomInput");

const inputPreNom = document.getElementById("PrenomInput");

const inputMail = document.getElementById("EmailInput");

const inputPassword = document.getElementById("PasswordInput");

const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnvalidation= document.getElementById("btn-validation-inscription");
inputNom.addEventListener("keyup", validateForm); 

inputPreNom.addEventListener("keyup", validateForm);

inputMail.addEventListener("keyup", validateForm);

inputPassword.addEventListener("keyup", validateForm);

inputValidationPassword.addEventListener("keyup", validateForm);

//Function permettant de valider tout le formulaire

function validateForm(){

    const nomok = validateRequired(inputNom);
    const prenomok = validateRequired(inputPreNom);
    const mailok= validateMail(inputMail);
    if (nomok && prenomok && mailok){
        btnvalidation.disabled = false;    
    }
    else{
        btnvalidation.disabled = true;
    }
}

function validateMail(input){
    //Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

    if(input.value != ''){

        input.classList.add("is-valid");

        input.classList.remove("is-invalid"); 

    }

    else{

        input.classList.remove("is-valid");

        input.classList.add("is-invalid");

    }

}
*/