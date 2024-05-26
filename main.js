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
document.querySelector('.login-btn').addEventListener('click', function() {
    let username = document.querySelector('.brn-em').value;
    let password = document.querySelector('.kodeord').value;

    if(username === 'Admin' && password === 'Schneider123') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password!');
    }
});

//Tanja
// Opretter et objekt med svar fra chatbotten
let chatbotResponses = {
    greeting: "Hej, mit navn er Elice og jeg er en chatbot.<br> Har du spørgsmål, jeg ikke kan svare på, så sender jeg dig videre til en menneskelig kollega. <br> Hvad kan jeg hjælpe dig med i dag?",
    inquiry: "Hej, jeg har brug for hjælp til en installation af R9F24310 Schneider Electric Miniature circuit breaker (MCB), Resi9, 3P, 10A, C curve, 6000A. IEC/EN 60898-1. <br>Kan den bruges sammen med Strømtransformer PowerTag 3P 63A sensor?"
};

// Opretter et array til chatbeskeder
let chatMessages = [
    { type: "incoming", message: chatbotResponses.greeting },
    { type: "outgoing", message: chatbotResponses.inquiry }
];

// Loop gennem chatbeskeder og tilføj dem til chatboxen
let chatbox = document.querySelector(".chatbox");
chatMessages.forEach(message => {
    let li = document.createElement("li");
    li.classList.add("chat", message.type);
    li.innerHTML = `<p>${message.message}</p>`;
    chatbox.appendChild(li);
});

// Function to add message to chatbox
function addMessage(type, message) {
    let li = document.createElement("li");
    li.classList.add("chat", type);
    li.innerHTML = `<p>${message}</p>`;
    chatbox.appendChild(li);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to bottom
}

// Eventlistener for send-knappen
let sendButton = document.getElementById("send-btn");
sendButton.addEventListener("click", () => {
    let textarea = document.querySelector(".texarea");
    let message = textarea.value;
    if (message.trim() !== "") { // Hvis beskeden ikke er tom
        addMessage("outgoing", message);
        textarea.value = ""; // Nulstil tekstfeltet

        // Simulate bot response
        setTimeout(() => {
            addMessage("incoming", chatbotResponses.greeting);
        }, 1000); // Bot response after 1 second
    } else {
        console.log("Message is empty.");
    }
});