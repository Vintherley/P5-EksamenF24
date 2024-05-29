const data = [
    { username: 'Admin', password: Schneider },
    { username: 'Thomas', password: Hest },
];

function submitLogin(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let userIsValidated = validateUser(username, password);

    if (userIsValidated) {
        window.location.assign('forside.html');
    } else {
        alert('Forkert kodeord');
    }
}

function validateUser(username, password) {
    let result = false;

    data.forEach(element => {
        if (element.username == username && password == element.password) {
            result = true;
        }
    });
    return result;
}

document.querySelector('form').addEventListener('submit', submitLogin);

