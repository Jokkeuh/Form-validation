const userName = document.getElementById("uname")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const zipCode = document.getElementById("zipCode")
const country = document.getElementById("country")
const password = document.getElementById("password")
const passwordCheck = document.getElementById("passwordCheck")
const button = document.getElementsByTagName("button")
const highFive = document.createElement("div")



const form = document.getElementById("form")

const formArray = [ 
                    userName,
                    email,
                    phone,
                    zipCode,
                    country,
                    password,
                    passwordCheck 
                  ]



const showError = () => {

    if(formArray[5].validity.valueMissing){
        formArray[6].setCustomValidity("set your password first");
        formArray[6].reportValidity();
    }else if(formArray[6].value.toString()  !==  formArray[5].value.toString()){
        formArray[6].setCustomValidity("enter the same password as above");
        formArray[6].reportValidity();
    }else{
        formArray[6].setCustomValidity("");
    }

    
    if(formArray[5].validity.valueMissing){
        formArray[5].setCustomValidity("enter a valid password");
        formArray[5].reportValidity();
    }else if(formArray[5].length < 8){
        formArray[5].setCustomValidity("enter at least 8 characters");
        formArray[5].reportValidity();
    }else{
        formArray[5].setCustomValidity("");
        
    }


    if(formArray[4].validity.valueMissing){
        formArray[4].setCustomValidity("enter a valid country code ie : BEL for Belgium, USA for America, NED for Netherlands.");
        formArray[4].reportValidity();
        
    }else if(!formArray[4]){
        return
    }else{
        formArray[4].setCustomValidity("");
        
    }


    if(formArray[3].validity.valueMissing){
        formArray[3].setCustomValidity("enter a Zip-Code");
        formArray[3].reportValidity();
    }else if(formArray[3].validity.patternMismatch){
        formArray[3].setCustomValidity("enter a valid Zip-Code ie '2860'");
        formArray[3].reportValidity();
    }else{
        formArray[3].setCustomValidity("");
        
    }


    if(formArray[2].validity.valueMissing){
        formArray[2].setCustomValidity("enter a valid phone number");
        formArray[2].reportValidity();
    }else if(formArray[2].validity.patternMismatch){
            formArray[2].setCustomValidity("enter a valid phone number pattern");
            formArray[2].reportValidity();
    }else{
        formArray[2].setCustomValidity("");
        
    }
    
    


    if(formArray[1].validity.valueMissing){
        formArray[1].setCustomValidity("enter a valid email pls");
        formArray[1].reportValidity();
    }else if(formArray[1].validity.typeMismatch){
        formArray[1].setCustomValidity("use @ ");
        formArray[1].reportValidity();
        
    }else{
        formArray[1].setCustomValidity("");
        
    }


    let CapLet = formArray[0].value.toString().charAt(0);

    if(formArray[0].validity.valueMissing){
        formArray[0].setCustomValidity("Enter a name");
        formArray[0].reportValidity();
    }
    else if(CapLet !== CapLet.toUpperCase()){
            formArray[0].setCustomValidity("Use a Capital letter")
            console.log(CapLet)
            formArray[0].reportValidity();
    }else{
        formArray[0].setCustomValidity("");
        
    }
}

const successSubmit = () => {
    formArray.forEach(element => {
        element.value = ""
    })
    highFive.setAttribute("id","highFive")
    highFive.setAttribute("class","highFive")
    highFive.innerHTML = "HIGHFIVE DUDE"
    form.appendChild(highFive)
    setTimeout(() => {
        HFremove = document.getElementById("highFive")
        HFremove.remove()
    }, 950);
}

form.addEventListener("submit", (e) =>{
    
    e.preventDefault()
    if(!userName.validity.valid){
        
        showError()
    }
    else if(!email.validity.valid){
        
        showError()
    }
    else if(!phone.validity.valid){
        
        showError()
    }
    else if(!zipCode.validity.valid){
        showError()
    }
    else if(!country.validity.valid){
        showError()
    }
    else if(!password.validity.valid){
        showError()
    }
    else if(!passwordCheck.validity.valid){
        showError()
    }
    else{
        successSubmit()
    }
})


