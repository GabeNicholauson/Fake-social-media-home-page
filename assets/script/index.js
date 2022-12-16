'use strict';

const enterEmail = document.querySelector('.email');
const enterPassword = document.querySelector('.password');
const loginButton = document.querySelector('.login-button');
const mistake = document.querySelector('.mistake');

setEmailAndPassword();

/**********************
 *  Event listeners
**********************/
loginButton.addEventListener('click', checkEmailAndPassword);

//If enter is pressed while enter login info
enterEmail.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        checkEmailAndPassword();
    }
});
enterPassword.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        checkEmailAndPassword();
    }
});
/**********************
 *  Functions
**********************/

function setEmailAndPassword() { //sets the login and password when user loads page
    if (localStorage.length < 2) { //if local storage already has the email and password
        const email = 'gabriel@example.com';
        const password = 'notreal';

        //sets email and password
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', password);
    }
}

function checkEmailAndPassword() { //checks to see if the user entered the correct email and password
    if (enterEmail.value === localStorage.Email && 
        enterPassword.value === localStorage.Password) { //if the email and password are correct
            window.open('home.html', '_self'); //open home page
        } else { //if the email and password are wrong
            mistake.classList.remove('hidden'); //shows text informing user that they're wrong
        }
}