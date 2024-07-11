import { IoSend } from "react-icons/io5";
import { useSendMessage } from "../../hooks/useSendMessage";
import { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <div className="px-3 py-2 bg-sky-950 rounded-br-lg absolute bottom-0 min-w-[100%]">
      <form
        action=""
        className="flex relative items-center text-white"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full px-3 py-2 bg-gray-900 rounded-lg border-none outline-none focus:ring-0 focus:outline-sky-400 focus:outline-1 "
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <button
          type="submit"
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <IoSend />
          )}
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
