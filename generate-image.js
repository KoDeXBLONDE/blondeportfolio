import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

async function generate() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: "A 25 to 30 year old person of African descent standing in profile, typing on a laptop they are holding. The laptop screen and the air around it display glowing modern full-stack development logos (React, Node.js, etc.) and AI logos connected in a neural algorithmic way. Cinematic lighting, professional, tech vibe, high quality, photorealistic.",
      config: {
        imageConfig: {
          aspectRatio: "3:4",
          imageSize: "1K"
        }
      }
    });
    
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64Data = part.inlineData.data;
        fs.writeFileSync('./public/profile-tech.png', Buffer.from(base64Data, 'base64'));
        console.log("Image saved to public/profile-tech.png");
        break;
      }
    }
  } catch (e) {
    console.error("Error generating image:", e);
    process.exit(1);
  }
}
generate();
