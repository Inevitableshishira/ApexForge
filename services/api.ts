
import { GoogleGenAI } from "@google/genai";

export interface InquiryData {
  name: string;
  email: string;
  message: string;
}

export const api = {
  /**
   * Persists inquiry to mock database and generates AI validation.
   */
  async submitInquiry(data: InquiryData) {
    // 1. Simulate Network Delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      if (!data.email.includes('@')) throw new Error("Invalid email format");

      // 2. Simulated Persistence (Mock Database)
      const db = JSON.parse(localStorage.getItem('apexforge_db') || '{"inquiries": []}');
      const newEntry = { 
        ...data, 
        id: Math.random().toString(36).substr(2, 9), 
        date: new Date().toISOString() 
      };
      db.inquiries.push(newEntry);
      localStorage.setItem('apexforge_db', JSON.stringify(db));

      // 3. AI Analysis - Ensure client input is explicitly sent to Gemini
      let aiAssessment = "Vision recorded for priority review.";
      
      const apiKey = process.env.API_KEY;
      if (apiKey) {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: [{
            role: 'user',
            parts: [{ 
              text: `A potential client named ${data.name} has submitted an inquiry: "${data.message}". As the lead architect of ApexForge, provide a professional, one-sentence validation of their concept in our signature minimal, sophisticated tone.` 
            }]
          }]
        });
        aiAssessment = response.text || aiAssessment;
      }

      return {
        success: true,
        message: "Your inquiry has been stored in our studio database.",
        assessment: aiAssessment
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.message || "Connection failure."
      };
    }
  },

  /**
   * Retrieves all inquiries (Database Read operation)
   */
  getInquiries() {
    const db = JSON.parse(localStorage.getItem('apexforge_db') || '{"inquiries": []}');
    return db.inquiries.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
};

export const submitInquiry = api.submitInquiry;
