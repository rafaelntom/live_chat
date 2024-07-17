import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "./MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef<HTMLDivElement>(null);
  useListenMessages();

  useEffect(() => {
    setTimeout(async () => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }, [messages]);

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
          return (
            <div className="" key={message._id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          );
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
