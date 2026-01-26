
import { GoogleGenAI } from "@google/genai";

export const getDesignConsultation = async (history: {role: 'user' | 'model', text: string}[], message: string) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return "Design library offline. Please contact the studio directly.";

  const ai = new GoogleGenAI({ apiKey });
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    You are the ApexForge AI Consultant. You are professional, sophisticated, and an expert in high-end monochrome architecture.
    Your tone is ultra-minimal and elegant. 
    You focus on:
    1. Monochrome aesthetics (Black, White, Gray)
    2. Spatial efficiency
    3. Structural precision
    
    Keep responses concise (max 2 paragraphs). Do not use bold markdown.
  `;

  try {
    // Map history to the format expected by the Gemini API
    const contents = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    // Add the current user message
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model,
      contents: contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The system is currently recalculating. Please try your request again.";
  }
};
