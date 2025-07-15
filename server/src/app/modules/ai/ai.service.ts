import axios from "axios";
import ApiError from "../../errors/ApiError";
import config from "../../../config";
import { genAI } from "../../utils/configureAiMo0del";

const generatePrompt = async () => {
  const message = "how are you ";
  //  const { message } = req.body;
  const response = await axios.post(
    "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill",
    { inputs: message },
    {
      headers: {
        Authorization: `Bearer ${config?.ai?.hugging_face_token}`,
      },
    }
  );
  const data = response?.data;
  return {
    ai: "hello",
    data,
    response,
    TOKEN: `${config?.ai?.hugging_face_token}`,
  };
};

const GetLargeLanguageModelData = async () => {
  const text = "how are you ";
  //! open ai integration
  // const res = await axios.get(link);
  // const text = res.data;
  // return content;
  //   const params = {
  //     model: "gpt-3.5-turbo",
  //     messages: [{ role: "user", content: "Say this is a test" }],
  //     prompt: `Based on the content of the following website: ${text}, and this prompt: ${prompt}, generate a response.`,
  //     // max_tokens: 150,
  //   };
  //   const aiResponse = await OpenAIClient.chat.completions.create(params);
  //   console.log({ aiResponse })
  //   return {
  //     success: true,
  //     data: aiResponse.data.choices[0].text || "",
  //     aiResponse,
  //   };
  // console.log({ text });

  //!Gemini ai
  const promptTxt = `Based on the content of the following website:  and this prompt: ${text}, generate a response.`;
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
  // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(promptTxt);
  // const result = await model.generateContent(prompt);
  const aiRes = await result.response;
  const generatedInfo = aiRes.text();
  return generatedInfo;
  // return {
  //   success: true,
  //   data: aiResponse.data.choices[0].text || "",
  //   aiResponse,
};
export const AiServices = {
  generatePrompt,
  GetLargeLanguageModelData,
};
