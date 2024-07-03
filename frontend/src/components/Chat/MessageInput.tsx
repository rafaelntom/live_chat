import { IoSend } from "react-icons/io5";

const MessageInput = () => {
  return (
    <div className="px-3 py-2 bg-sky-950">
      <form action="" className="flex relative items-center text-white">
        <input
          type="text"
          className="w-full px-3 py-2 bg-gray-900 rounded-lg border-none outline-none focus:ring-0 focus:outline-sky-400 focus:outline-1 "
          placeholder="Type a message..."
        ></input>
        <button
          type="submit"
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <IoSend />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
