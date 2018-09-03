const fetch = require('node-fetch');

const URL = 'https://jsonplaceholder.typicode.com';


// ASYNC
async function getUser(id) {
    const response = await fetch(`${URL}/users/${id}`);
    const data = await response.json();

    return data;
}

async function main() {
    const user = await getUser(1);
    console.log(user, 'In ASYNC way');
}


function getUserWithPromise(id) {
    return fetch(`${URL}/users/${id}`)
        .then((user) => user.json())
        .then((user) => console.log(user, 'In Promise way'));
}


main();

getUserWithPromise();