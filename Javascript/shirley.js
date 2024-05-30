const data = [
    { username: 'Admin', password: 'Schneider' },
    { username: 'Thomas', password: 'Hest' },
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
    return data.some(element => element.username === username && element.password === password);
}

document.getElementById('login-form').addEventListener('submit', submitLogin);

