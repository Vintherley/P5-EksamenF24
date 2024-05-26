//Louise
// Array til at gemme brugerobjekter
var users = [];

// Funktion til at validere formen og tilføje brugerobjekt til arrayet
function signUp(event) {
    event.preventDefault(); // Forhindrer formularen i at blive sendt

    // Hent inputværdierne
    var username = document.getElementById('bruger').value;
    var email = document.getElementById('em').value;
    var password = document.getElementById('kode').value;

    // Valider input
    if (username === '' || email === '' || password === '') {
        alert('Alle felter skal udfyldes');
        return;
    }

    // Opret brugerobjekt
    var user = {
        username: username,
        email: email,
        password: password
    };

    // Tilføj brugerobjekt til array
    users.push(user);

    // Vis en besked om succesfuld tilmelding
    alert('Tilmelding fuldført!');

    // Nulstil formen
    document.getElementById('opbru').reset();
}

// Lyt efter submit-begivenheden på formen og kald signUp-funktionen
document.getElementById('opbru').addEventListener('submit', signUp);




//Lotte

//Shirley

//Tanja