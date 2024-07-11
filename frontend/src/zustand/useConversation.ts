import { create } from "zustand";
import { Conversation } from "../types/interfaces";

interface ConversationState {
  currentConversation: Conversation | null;
  messages: string[];
  updateCurrentConversation: (currentConversation: Conversation | null) => void;
  updateMessages: (messages: string[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
  currentConversation: null,
  messages: [],
  updateCurrentConversation: (currentConversation) =>
    set({ currentConversation }),
  updateMessages: (messages) => set({ messages }),
}));

export default useConversation;
