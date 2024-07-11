import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { IoIosChatbubbles } from "react-icons/io";

export const MessagesContainer = () => {
  const { currentConversation, updateCurrentConversation } = useConversation();

  useEffect(() => {
    return () => updateCurrentConversation(null);
  }, [updateCurrentConversation]);

  return (
    <>
      {!currentConversation ? (
        <EmptyMessagesContainer />
      ) : (
        <div className="flex flex-col md:min-w-[450px] rounded-sm bg-black  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 font-open-sans rounded-r-lg min-h-max relative">
          <header className="bg-sky-950 px-4 py-2 mb-2 font-roboto rounded-tr-lg">
            <span className="text-gray-200 font-bold">To: </span>
            <span className="font-bold tracking-wide text-sky-300">
              {/* !MAKE A FUNCTION TO CAPITALIZE NAMES */}
              {currentConversation.fullName.charAt(0).toUpperCase() +
                currentConversation.fullName.slice(1)}
            </span>
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
    <div className="flex flex-col md:min-w-[450px] rounded-sm bg-sky-950 font-open-sans items-center justify-center rounded-r-lg gap-4 py-10">
      <h1 className="text-white font-bold text-3xl">👋 Welcome 👋</h1>
      <h2 className="text-white text-3xl"></h2>
      <IoIosChatbubbles size={100} className="text-sky-600" />
      <span className="text-white  text-xl">
        Select a chat to start messaging!
      </span>
    </div>
  );
};
