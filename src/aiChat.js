import { aiReply } from "./genai";

document.getElementById('chatBtn').addEventListener('click', function () {
    document.getElementById('chatWindow').classList.toggle('hidden');
});

document.getElementById('chatInput').addEventListener('keypress', async function (e) {
    if (e.key === 'Enter') {
        const userMessage = e.target.value;
        e.target.value = 'Loading...';

        // Append user message to chat
        const chatContent = document.getElementById('chatContent');
        const userMsgElement = document.createElement('div');
        userMsgElement.classList.add('text-right', 'text-white', 'mt-2');
        userMsgElement.textContent = `You: ${userMessage}`;
        chatContent.appendChild(userMsgElement);

        // Simulate Gemini AI response (replace this with actual API call)
        // const aiResponse = `Gemini AI: Here's some information about ${userMessage}`;
        const aiResponse = await aiReply(userMessage);
        if (aiResponse) {
            const aiMsgElement = document.createElement('div');
            aiMsgElement.classList.add('text-left', 'text-green-400', 'mt-2');
            aiMsgElement.textContent = aiResponse;
            chatContent.appendChild(aiMsgElement);
        }
        e.target.value = '';

        chatContent.scrollTop = chatContent.scrollHeight;  // Scroll to bottom

    }
});


