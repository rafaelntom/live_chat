import { create } from "zustand";

const useConversation = create((set) => ({
  currentConversation: null,
  updateCurrentConversation: (currentConversation) =>
    set({ currentConversation }),
  messages: [],
  updateMessages: (messages) => set({ messages }),
}));

export default useConversation;
