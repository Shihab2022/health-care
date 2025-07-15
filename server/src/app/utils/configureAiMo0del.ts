// const OpenAI = require("openai");

// const OpenAIClient = new OpenAI({
//   apiKey: process.env.LLM_API_KEY,
// });

const { GoogleGenerativeAI } = require("@google/generative-ai");
export const genAI = new GoogleGenerativeAI(process.env.LLM_API_KEY);
