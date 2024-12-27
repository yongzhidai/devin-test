import { create } from "zustand";
import { ChatMessage } from "../types";
import { chatService, ERROR_MESSAGES } from "../services";

interface ChatStore {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (content: string, appId?: string) => Promise<void>;
  clearMessages: () => void;
  clearError: () => void;
  getMessagesForApp: (appId: string) => ChatMessage[];
}

export const useChatStore = create<ChatStore>((set, get) => ({
  messages: [],
  isLoading: false,
  error: null,
  sendMessage: async (content: string, appId?: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: Date.now(),
      appId,
    };

    set(state => ({
      messages: [...state.messages, userMessage],
      isLoading: true,
    }));

    try {
      const aiResponse = await chatService.sendMessage(content);
      set(state => ({
        messages: [...state.messages, aiResponse],
        isLoading: false,
      }));
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message, isLoading: false });
      } else {
        set({ error: ERROR_MESSAGES.SERVER, isLoading: false });
      }
    }
  },
  clearMessages: () => set({ messages: [], error: null }),
  clearError: () => set({ error: null }),
  
  getMessagesForApp: (appId: string) => {
    const state = get();
    return state.messages.filter(message => message.appId === appId);
  },
}));
