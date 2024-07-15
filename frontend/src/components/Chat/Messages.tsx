import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "./MessageSkeleton";

const Messages = () => {
  const { loading, messages } = useGetMessages();

  console.log(messages, loading);

  return (
    <div
      className={
        messages.length == 0
          ? "px-4 overflow-hidden flex flex-col pb-10"
          : "px-4 overflow-auto flex flex-col pb-12 mb-5"
      }
    >
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => {
          return <Message key={message._id} message={message} />;
        })}
      {loading && [...Array(4)].map((_, i) => <MessageSkeleton key={i} />)}
      {!loading && messages.length == 0 ? (
        <span className="text-center w-full pt-2 font-roboto italic opacity-80">
          Send a message to start the conversation
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Messages;
