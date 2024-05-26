//Louise
let users = []; // Array til at opbevare brugerobjekter

// Funktion til at vise eller skjule kodeordet
function togglePasswordVisibility() {
    let passwordInput = document.getElementById('kode');
    let eyeIcon = document.getElementById('eye'); // Ændret til 'eye'

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "img/eye-open.svg"; // Skift til et åbent øje-ikon
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "img/eye.svg"; // Skift til et lukket øje-ikon
    }
}

// Funktion til at håndtere tilmeldingsprocessen
function signUp(event) {
    event.preventDefault(); // Forhindrer formularen i at blive sendt

    // Hent inputværdierne
    let username = document.getElementById('bruger').value;
    let email = document.getElementById('em').value;
    let password = document.getElementById('kode').value;

    // Valider input
    if (username === '' || email === '' || password === '') {
        alert('Alle felter skal udfyldes');
        return;
    }

    // Opret brugerobjekt
    let user = {
        username: username,
        email: email,
        password: password
    };

    // Tilføj brugerobjekt til array
    users.push(user);

    // Nulstil formen
    document.getElementById('opbru').reset();

    // Naviger til forsiden
    window.location.href = 'forside.html';
}

// Lyt efter submit-begivenheden på formen og kald signUp-funktionen
document.getElementById('opbru').addEventListener('submit', signUp);

//Lotte

//Shirley

//Tanja