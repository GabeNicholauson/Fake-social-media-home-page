'use strict';

const following = document.querySelector('.following');

getUsers();

/***********************
 *  Functions
***********************/

async function getUsers() { //pulls random users from api
    const url = 'https://randomuser.me/api/?nat=CA&results=10&seed=same';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        mode: 'cors'
    };

    try {
        const result = await fetch(url, options); //Fetch random users

        if (result.status >= 200 && result.status < 400) { //If successful
            const data = await result.json();
            console.log(data.results);
            displayFollowers(data.results); //Give results to displayFollowers function
        }
    } catch(error) { //if there is an error
        console.log(error);
    }
}

function displayFollowers(followers) { //displays random users on page
    for (let i = 0; i < followers.length; i++) { //goes through each user

        //Displays users picture, first name and last name
        following.innerHTML += `<div class="user flexbox">
        <div class="pfp" style="background-image: url(${followers[i].picture.medium})"></div>
        <div class="user-info">
            <h3>${followers[i].name.first + ' ' + followers[i].name.last}</h3>
            <p class="subtext">${followers[i].location.city}</p>
        </div>
    </div>`;
    }
}