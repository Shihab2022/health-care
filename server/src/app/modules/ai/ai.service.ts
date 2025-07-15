import ApiError from "../../errors/ApiError";

const generatePrompt = async () => {
  return {
    ai: "hello",
  };
};

export const AiServices = {
  generatePrompt,
};
