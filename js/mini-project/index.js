const usersBox = document.createElement('div');
usersBox.classList.add('outer');
document.body.appendChild(usersBox);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            const userBox = document.createElement('div');
            userBox.classList.add('inner');
            usersBox.appendChild(userBox);
            const pUser = document.createElement('p');
            pUser.innerText = `${user.id} - ${user.name}`;
            const userDetailsBtn = document.createElement('button');
            userDetailsBtn.innerText = 'USER DETAILS';
            userDetailsBtn.addEventListener('click', () => window.open(`user-details.html?userId=${user.id}`));
            userBox.append(pUser, userDetailsBtn);
        }
    });