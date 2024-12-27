import { ChatMessage } from "../types";
import { delay, simulateError, ERROR_MESSAGES } from './index';

export const chatService = {
  sendMessage: async (content: string): Promise<ChatMessage> => {
    await delay(1000);

    // Simulate validation error for empty messages
    if (!content.trim()) {
      throw new Error(ERROR_MESSAGES.VALIDATION);
    }

    // Simulate random server errors
    if (simulateError()) {
      throw new Error(ERROR_MESSAGES.SERVER);
    }

    // Mock AI response with different message types
    const responses = [
      `我理解你的问题是："${content}"。让我来帮你解答...`,
      `关于"${content}"，我的建议是...`,
      `基于你提到的"${content}"，我认为...`,
      `让我们来分析一下"${content}"这个问题...`
    ];
    
    return {
      id: Date.now().toString(),
      content: responses[Math.floor(Math.random() * responses.length)],
      sender: "ai",
      timestamp: Date.now(),
    };
  },
};
