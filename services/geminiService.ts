import { GoogleGenAI } from "@google/genai";
import { CAR_DATA } from "../constants";

const getSystemInstruction = () => `
You are 'Velocity AI', a sophisticated, high-end concierge for a luxury car rental and sales agency.
Your tone is elegant, professional, yet energetic and passionate about automotive engineering.
You help users find the perfect car from our catalog.

Here is our current fleet inventory:
${JSON.stringify(CAR_DATA.map(c => ({
  make: c.make,
  model: c.model,
  type: c.type,
  priceRent: `$${c.pricePerDay}/day`,
  priceBuy: `$${c.priceToBuy}`,
  specs: c.specs
})))}

Rules:
1. ONLY recommend cars from the list above.
2. If a user asks for a car we don't have, politely suggest the closest alternative from our fleet.
3. Be concise but persuasive. Highlight the 'emotion' of driving.
4. If asked about prices, provide both rental and purchase options clearly.
5. Format your responses with nice spacing.
`;

export const sendMessageToGemini = async (history: {role: 'user' | 'model', text: string}[], message: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // We create a chat session
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
        temperature: 0.7, // Slightly creative but grounded
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const response = await chat.sendMessage({ message });
    return response.text || "I apologize, I am momentarily distracted by the engine noise. Could you repeat that?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently unable to access the fleet database. Please try again in a moment.";
  }
};
