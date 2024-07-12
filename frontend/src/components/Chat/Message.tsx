import { MessageInterface } from "../../types/interfaces";

const Message = ({ message }: { message: MessageInterface }) => {
  console.log(message);
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://avatar.iran.liara.run/public/boy?username=rafael"
            alt=""
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-sky-700">{message.text}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        10:12
      </div>
    </div>
  );
};

export default Message;
