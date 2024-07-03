import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { IoIosChatbubbles } from "react-icons/io";

export const MessagesContainer = () => {
  const noChatSelected = false;
  return (
    <>
      {noChatSelected ? (
        <EmptyMessagesContainer />
      ) : (
        <div className="flex flex-col md:min-w-[450px] rounded-sm bg-blue-950  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 font-open-sans rounded-r-lg">
          <header className="bg-sky-950 px-4 py-2 mb-2 font-roboto ">
            <span className="text-gray-200 font-bold">To: </span>
            <span className="text-gray-200 font-bold">John Doe</span>
          </header>
          <Messages />
          <MessageInput />
        </div>
      )}
    </>
  );
};

export const EmptyMessagesContainer = () => {
  return (
    <div className="flex flex-col md:min-w-[450px] rounded-sm bg-sky-950 font-open-sans items-center justify-center rounded-r-lg gap-4">
      <h1 className="text-white font-bold text-3xl">👋 Welcome 👋</h1>
      <h2 className="text-white text-3xl">username.goes.here</h2>
      <IoIosChatbubbles size={100} className="text-sky-600" />
      <span className="text-white  text-xl">
        Select a chat to start messaging!
      </span>
    </div>
  );
};
