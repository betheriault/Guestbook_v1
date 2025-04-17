/*
TODO:

- The 'Login' button on Login page should be disabled unless proper
  username and password are entered
- Add validations to Create Account Page. If everything is good, you should be
  able to 'Submit' which will add a record in database.
- Figure out the clearAll() function issue. Clear All on 'create an account' not working
  but 'forgot password' one is (before adding 'forgot password' button, 'create an account' clear all was
  working fine)

*/

const loginButton = document.getElementById("lmcsm-login-button");
const loginButtonMain = document.getElementById("mbc-login-button");

const userInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");
const forgotPasswordButton = document.getElementById("lmcsm-forgot-password-button");

const forgotPasswordClearAllButton = document.getElementById('fpscc-clear-all-button');
const forgotPasswordNewPasswordInput = document.getElementById('fpmcc-new-password-text');
const forgotPasswordNewPasswordConfirmInput = document.getElementById('fpmcc-new-password-confirm-text');
const forgotPasswordSecurityCodeInput = document.getElementById('fpmcc-security-code-text');


const newLoginClearAllButton = document.getElementById('cambsc-clear-all-button');
const firstNameInput = document.getElementById('cambic-first-name-input');
const lastNameInput = document.getElementById('cambic-last-name-input');
const emailInput = document.getElementById('cambic-email-input');
const usernameInput = document.getElementById('cambic-username-input');
const createPasswordInput = document.getElementById('cambic-password-input');

if(loginButton){

    loginButton.disabled = true;

    loginButton.addEventListener("click", () => window.location.href="main.html");
}

if(loginButtonMain){

    loginButtonMain.addEventListener("click", () => window.location.href="login.html");
}

if(forgotPasswordButton){

    forgotPasswordButton.addEventListener("click", () =>  window.location.href="forgotPassword.html");
}

function loginPageValidations(){

    let password = passwordInput.value;
    let username = userInput.value;

    if(username === ''){
        loginButton.disabled = true;
    }

    if(password === ''){
        loginButton.disabled = true;
    }
    else if(password.length < 6 ){
        loginButton.disabled = true;
    }
    else{
        loginButton.disabled = false;
    }

}

function showPassword(){
    const checkbox = document.getElementById('cambic-password-input');

    if(checkbox.type === 'password'){
        checkbox.type = 'text';
    }
    else{
        checkbox.type = 'password';
    }
}

function clearAll(clearButton){
   
    if(clearButton === newLoginClearAllButton){
        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        usernameInput.value = '';
        createPasswordInput.value = '';
    }

    if(clearButton === forgotPasswordClearAllButton){
        forgotPasswordNewPasswordInput.value = '';
        forgotPasswordNewPasswordConfirmInput.value = '';
        forgotPasswordSecurityCodeInput.value = '';
    } 

}

passwordInput.addEventListener('input', loginPageValidations);
userInput.addEventListener('input', loginPageValidations);

if(newLoginClearAllButton){
    console.log('click!');
    newLoginClearAllButton.addEventListener('click', () => clearAll(newLoginClearAllButton));
}

if(forgotPasswordClearAllButton){
    console.log('click!');
    forgotPasswordClearAllButton.addEventListener('click', () => clearAll(forgotPasswordClearAllButton));
}
