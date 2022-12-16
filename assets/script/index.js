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

function setEmailAndPassword() {
    if (localStorage.length < 2) {
        const email = 'gabriel@example.com';
        const password = 'notreal';
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', password);
        console.log(localStorage);
    }
}

function checkEmailAndPassword() {
    if (enterEmail.value === localStorage.Email && 
        enterPassword.value === localStorage.Password) {
            window.open('../home.html', '_self');
        } else {
            mistake.classList.remove('hidden');
        }
}