import { create } from "zustand";
import { Conversation, MessageInterface } from "../types/interfaces";

interface ConversationState {
  currentConversation: Conversation | null;
  messages: MessageInterface[];
  updateCurrentConversation: (currentConversation: Conversation | null) => void;
  updateMessages: (messages: MessageInterface[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
  currentConversation: null,
  messages: [],
  updateCurrentConversation: (currentConversation) =>
    set({ currentConversation }),
  updateMessages: (messages) => set({ messages }),
}));

export default useConversation;
