import { GoogleGenerativeAI } from "@google/generative-ai";

// Vite প্রোজেক্টে process.env কাজ করে না, import.meta.env ব্যবহার করতে হয়
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

/**
 * ১. টেক্সট রেসপন্স (Chat)
 */
export const getGeminiResponse = async (prompt, history = []) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash", // লেটেস্ট স্টেবল মডেল
      systemInstruction: "You are Aura, a helpful and creative AI assistant integrated into a professional portfolio website. You are friendly, concise, and knowledgeable about the portfolio owner (Sanjid, a frontend developer).",
    });

    const chat = model.startChat({
      history: history.map(item => ({
        role: item.role === "user" ? "user" : "model",
        parts: [{ text: item.content }],
      })),
    });

    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "Error: Could not connect to Aura.";
  }
};

/**
 * ২. ইমেজ জেনারেট (Imagen 3 বা Gemini Multimodal ব্যবহার করে)
 */
export const generateImage = async (prompt, size = "1024x1024") => {
  try {
    // ইমেজ জেনারেট করার জন্য বর্তমানে Imagen মডেল বা নির্দিষ্ট মাল্টিমোডাল এন্ডপয়েন্ট লাগে
    const model = genAI.getGenerativeModel({ model: "imagen-3" }); 

    const result = await model.generateContent(prompt);
    const response = await result.response;

    // ইমেজ ডেটা চেক করা
    const candidates = response.candidates?.[0]?.content?.parts;
    const imagePart = candidates?.find(part => part.inlineData);

    if (imagePart) {
      return `data:image/png;base64,${imagePart.inlineData.data}`;
    }
    return null;
  } catch (error) {
    console.error("Image Generation Error:", error);
    return null;
  }
};

/**
 * ৩. টেক্সট টু স্পীচ (TTS)
 */
export const textToSpeech = async (text) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Gemini 2.0+ ভার্সনে মাল্টিমোডাল আউটপুট সাপোর্ট করে
    const result = await model.generateContent([
      {
        text: text,
      },
      {
        // অডিও আউটপুট রিকোয়েস্ট (যদি আপনার API এক্সেস থাকে)
        text: "Output the response as high-quality audio." 
      }
    ]);

    const response = await result.response;
    const audioPart = response.candidates?.[0]?.content?.parts?.find(p => p.inlineData && p.inlineData.mimeType.includes("audio"));

    if (audioPart) {
      return `data:audio/mp3;base64,${audioPart.inlineData.data}`;
    }
    return null;
  } catch (error) {
    console.error("TTS Error:", error);
    return null;
  }
};