import Messages from "./Messages";

const ChatContainer = () => {
  return (
    <div className="flex flex-col md:min-w-[450px] rounded-sm bg-blue-950  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 ">
      <header className="bg-sky-950 px-4 py-2 mb-2 font-roboto ">
        <span className="text-gray-200 font-bold">To: </span>
        <span className="text-gray-200 font-bold">John Doe</span>
      </header>
      <Messages />
    </div>
  );
};

export default ChatContainer;
