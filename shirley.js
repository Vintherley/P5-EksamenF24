
document.querySelector('.login-btn').addEventListener('click', function() {
    let username = document.querySelector('.brn-em').value;
    let password = document.querySelector('.kodeord').value;

    if(username === 'Admin' && password === 'Schneider123') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password!');
    }
});

