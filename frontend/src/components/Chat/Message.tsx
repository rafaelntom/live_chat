import { FC } from "react";
import { MessageProps } from "../../types/interfaces";
import { convertTimestampToTime } from "../../utils/timestampConverter";
import useConversation from "../../zustand/useConversation";

const Message: FC<MessageProps> = ({ message }) => {
  const { currentConversation } = useConversation();

  const messageFromMe = message.senderId === currentConversation?._id;
  const storedData = JSON.parse(localStorage.getItem("token")!);

  return (
    <div className={`chat ${!messageFromMe ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={
              !messageFromMe
                ? storedData.profilePicture
                : currentConversation?.profilePicture
            }
            alt=""
          />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${
          !messageFromMe ? "bg-sky-700" : "bg-neutral-800"
        }`}
      >
        {message.text}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center mt-1">
        {convertTimestampToTime(message.createdAt)}
      </div>
    </div>
  );
};

export default Message;
