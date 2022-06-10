//documments
const inputFName=document.querySelector('.input-fname');
const inputLName=document.querySelector('.input-lname');
const inputEmail=document.querySelector('.input-email');
const inputPassword=document.querySelector('.input-password');
const btn_trial=document.querySelector('.trial-button');
const errorAlertFname=document.querySelector('.fname-error-alert');
const errorAlertLname=document.querySelector('.lname-error-alert');
const errorAlertEmail=document.querySelector('.email-error-alert');
const errorAlertPass=document.querySelector('.pass-error-alert');

let fNameVal;
inputFName.addEventListener('input',()=>{
    fNameVal=inputFName.value.length;
    console.log(fNameVal);
})

let lNameVal;
inputLName.addEventListener('input',()=>{
    lNameVal=inputLName.value.length;
    console.log(lNameVal);
})

let emailVal;
inputEmail.addEventListener('input',()=>{
    emailVal=inputEmail.value.length;
    console.log(emailVal);
})


let passVal;
inputPassword.addEventListener('input',()=>{
    passVal=inputPassword.value.length;
    console.log(passVal);
})


btn_trial.addEventListener('click',()=>{
    if(fNameVal==0){
        inputFName.classList.add("input-style-error");
        errorAlertFname.classList.replace("visib-hidden",'error-txt');
    }
    else if(lNameVal==0){
        inputLName.classList.add("input-style-error");
        errorAlertLname.classList.replace("visib-hidden",'error-txt');
    }
    if(emailVal==0){
        inputEmail.classList.add("input-style-error");
        errorAlertEmail.classList.replace("visib-hidden",'error-txt');
    }
    if(passVal==0){
        inputPassword.classList.add("input-style-error");
        errorAlertPass.classList.replace("visib-hidden",'error-txt');
    }
    else{
        inputFName.classList.add("input-style-error");
        errorAlertFname.classList.replace("visib-hidden",'error-txt');
        inputLName.classList.add("input-style-error");
        errorAlertLname.classList.replace("visib-hidden",'error-txt');
        inputEmail.classList.add("input-style-error");
        errorAlertEmail.classList.replace("visib-hidden",'error-txt');
        inputPassword.classList.add("input-style-error");
        errorAlertPass.classList.replace("visib-hidden",'error-txt');
    }
})
