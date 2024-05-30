(() => {
    let users = []; // Array til at opbevare brugerobjekter

    // Funktion til at vise eller skjule kodeordet
    function togglePasswordVisibility() {
        const passwordInput = document.getElementById('kode');
        const eyeIcon = document.getElementById('eye');

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
        const username = document.getElementById('bruger').value;
        const email = document.getElementById('em').value;
        const password = document.getElementById('kode').value;

        // Valider input
        if (username === '' || email === '' || password === '') {
            alert('Alle felter skal udfyldes');
            return;
        }

        // Opret brugerobjekt
        const user = {
            username: username,
            email: email,
            password: password
        };

        // Tilføj brugerobjekt til array
        users.push(user);

        // Nulstil formen
        document.getElementById('opbru').reset();

        const arr = [
            {name: 'Tanja'}, 
            {name: 'Louise'}, 
            {name: 'Lotte'},
            {name:'Shirley'}
        ];

        arr.forEach(person => console.log(person));

        // Log de brugere, der tilmeldes
        console.log('Nuværende brugere:');
        users.forEach(user => console.log(user));

        // Naviger til forsiden
        window.location.href = 'forside.html';
    }

    // Lyt efter submit-begivenheden på formen og kald signUp-funktionen
    document.getElementById('opbru').addEventListener('submit', signUp);
    document.getElementById('eye').addEventListener('click', togglePasswordVisibility);
})();
