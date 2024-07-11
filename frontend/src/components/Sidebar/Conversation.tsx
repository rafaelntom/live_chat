import React from "react";
import { ConversationProps } from "../../types/interfaces";
import useConversation from "../../zustand/useConversation";

const Conversation: React.FC<ConversationProps> = ({ conversation }) => {
  const { currentConversation, updateCurrentConversation } = useConversation();

  const isSelected = currentConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`flex gap-4 items-center justify-center hover:bg-sky-700 rounded p-2 py-1 cursor-pointer my-1 ${
          isSelected && "bg-sky-700"
        }`}
        onClick={() => updateCurrentConversation(conversation)}
      >
        <div className="flex items-center justify-center">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src={conversation.profilePicture} alt="user avatar" />
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between">
            <p className="font-open-sans  text-lg text-white">
              {conversation.username}
            </p>
            <span>🎃</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default Conversation;
