document.addEventListener("DOMContentLoaded", function() {
    // Vælg nødvendige elementer
    const chatBox = document.querySelector('.chatbox');
    const textArea = document.querySelector('.texarea');
    const sendBtn = document.getElementById('send-btn');

    // Funktion til at tilføje beskeder til chatboksen
    function addMessage(sender, message) {
        const messageElement = document.createElement('li');
        messageElement.classList.add('chat');
        messageElement.classList.add(sender === 'bot' ? 'incoming' : 'outgoing');

        messageElement.innerHTML = sender === 'bot' 
            ? `<span class="material-symbols-outlined"><img src="img/image 13.png" class="bot-img" alt=""></span><p>${message}</p>` 
            : `<p>${message}</p>`;

        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Rul ned til bunden
    }

    // Håndtere brugerens input
    function handleUserInput() {
        const userMessage = textArea.value.trim();
        if (userMessage !== "") {
            addMessage('user', userMessage);
            textArea.value = ""; // Tøm inputfeltet

            // Simulér botens svar 
            const botResponse = generateBotResponse(userMessage);
            addMessage('bot', botResponse);
        }
    }

    // Funktion til at generere botens svar (placeholder logik)
    function generateBotResponse(userText) {
        // dette er hvad botten sender tilbage
        return "Hvad kan jeg hjælpe dig med? ";
        
    }

    // Tilføj event listener til send-knappen
    sendBtn.addEventListener('click', handleUserInput);

    // Tilføj event listener til textarea for at håndtere "Enter" tasten
    textArea.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Forhindr standard handling (ny linje)
            handleUserInput();
        }
    });
});