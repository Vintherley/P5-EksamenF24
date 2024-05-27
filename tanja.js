document.addEventListener("DOMContentLoaded", function() {
    // Vælg nødvendige elementer
    const chatBox = document.querySelector('.chatbox');
    const textArea = document.querySelector('.texarea');
    const sendBtn = document.getElementById('send-btn');

    // Bot-svar array
    const botResponses = [
        { keywords: ["hej", "hello"], response: "Hej! Hvordan kan jeg hjælpe dig i dag?" },
        { keywords: ["hjælp", "support"], response: "Hvilken slags hjælp har du brug for?" },
        { keywords: ["tak", "mange tak"], response: "Velbekomme! Er der andet, jeg kan hjælpe med?" },
        // Standard svar
        { keywords: [], response: "Dette er et spørgsmål, som jeg ikke kan svare på. Jeg sender dig videre til en menneskelig kollega." }
    ];

    // Funktion til at tilføje beskeder til chatboksen
    function addMessage(sender, message) {
        const messageElement = document.createElement('li');
        messageElement.classList.add('chat');
        messageElement.classList.add(sender === 'bot' ? 'incoming' : 'outgoing');

        messageElement.innerHTML = sender === 'bot' 
            ? `<span class="material-symbols-outlined"><img src="img/image%2013.png" class="bot-img" alt=""></span><p>${message}</p>` 
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

    // Funktion til at generere botens svar
    function generateBotResponse(userText) {
        // Loop gennem bot-svar arrayet for at finde et svar
        for (let i = 0; i < botResponses.length; i++) {
            const { keywords, response } = botResponses[i];
            if (keywords.some(keyword => userText.toLowerCase().includes(keyword))) {
                return response;
            }
        }
        // Hvis ingen nøgleord matcher, returner standardsvaret
        return botResponses[botResponses.length - 1].response;
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
