// import React from 'react'
// import PropTypes from 'prop-types'

// const GenAi = props => {
//   return (
//     <div>GenAi</div>
//   )
// }

// GenAi.propTypes = {}

// export default GenAi;

/*
 * Install the Generative AI SDK
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "here'syourapikey";
if (!apiKey) {
  console.error("API Key is missing. Please check your environment variables.");
  throw new Error("API Key not found");
}
const genAI = new GoogleGenerativeAI(apiKey);

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
];

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "Your name is Sphere AI, an ai agent made by jatin kaushik for a tech platform Tech Sphere. You are a technology expert who has knowledge of each and every technology like web 3.0, blockchain, ai and so on. User will asks anything about technology and you have to respond professionally and encourage user to know more about new and trending technology. Give response within 30 words",
  safetySettings: safetySettings,
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 800,
  responseMimeType: "text/plain",
};

export async function aiReply(
  messageInput = "what are new technology trends"
) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(messageInput);
  const response = result.response.text();
  return response;
}
