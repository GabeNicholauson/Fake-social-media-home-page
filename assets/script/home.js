'use strict';

const following = document.querySelector('.following');

getUsers();

/***********************
 *  Functions
***********************/

async function getUsers() {
    const url = 'https://randomuser.me/api/?nat=CA&results=10&seed=same';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        mode: 'cors'
    };

    try {
        const result = await fetch(url, options);

        if (result.status >= 200 && result.status < 400) {
            const data = await result.json();
            displayFollowers(data.results);
        }
    } catch(error) {
        console.log(error);
    }
}

function displayFollowers(followers) {
    for (let i = 0; i < followers.length; i++) {
        following.innerHTML += `<div class="user flexbox">
        <div class="pfp" style="background-image: url(${followers[i].picture.medium})"></div>
        <div class="user-info">
            <h3>${followers[i].name.first + ' ' +followers[i].name.last}</h3>
            <p class="subtext">Employment placeholder</p>
        </div>
    </div>`;
    }
}