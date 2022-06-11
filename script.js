// Defining Constants
const fName=document.querySelector(".input-fname");
const fnameErrorAlert=document.querySelector(".fname-error-alert");

const lName=document.querySelector(".input-lname");
const lnameErrorAlert=document.querySelector(".lname-error-alert");

const emailEmail=document.querySelector(".input-email");
const emailErrorAlert=document.querySelector(".email-error-alert");

const passPass=document.querySelector(".input-password");
const passErrorAlert=document.querySelector(".pass-error-alert");

const trial_btn=document.querySelector(".trial-button");



// fName.addEventListener('input',()=>{
// })
// lName.addEventListener("input",()=>{
// })
// emailEmail.addEventListener("input",()=>{
// })


// button function
trial_btn.addEventListener("click",()=>{

    // first name Condition
    if(fName.value==""){
        fName.classList.add("input-style-error");
        fnameErrorAlert.classList.remove("visib-hidden");
        setTimeout(()=>{
            fName.classList.remove("input-style-error");
            fnameErrorAlert.classList.add("visib-hidden");
        },1000); 
    }
    else{
        fName.classList.remove("input-style-error");
        fnameErrorAlert.classList.add("visib-hidden");
        
    }

    // second name condition
    if(lName.value==""){
        lName.classList.add("input-style-error");
        lnameErrorAlert.classList.remove("visib-hidden"); 
        setTimeout(()=>{
            lName.classList.remove("input-style-error");
            lnameErrorAlert.classList.add("visib-hidden");
        },1000);
    }
    else{
        lName.classList.remove("input-style-error");
        lnameErrorAlert.classList.add("visib-hidden");
    }

    // email condition
    if(emailEmail.value==""){
        emailEmail.classList.add("input-style-error");
        emailErrorAlert.classList.remove("visib-hidden");
        setTimeout(()=>{
            emailEmail.classList.remove("input-style-error");
            emailErrorAlert.classList.add("visib-hidden");
        },1000)
    }
    else{
        emailEmail.classList.remove("input-style-error");
        emailErrorAlert.classList.add("visib-hidden");
    }

    // password condition
    if(passPass.value==""){
        passPass.classList.add("input-style-error");
        passErrorAlert.classList.remove("visib-hidden");
        setTimeout(()=>{
            passPass.classList.remove("input-style-error");
            passErrorAlert.classList.add("visib-hidden");
        },1000)
    }
    else{
        passPass.classList.remove("input-style-error");
        passErrorAlert.classList.add("visib-hidden");
    }
})


