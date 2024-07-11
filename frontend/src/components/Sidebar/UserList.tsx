import useGetConversations from "../../hooks/useGetConversations";
import { Conversation as IConversation } from "../../types/interfaces";
import Conversation from "./Conversation";

const UserList = () => {
  const { conversations, loading } = useGetConversations();

  const conversationList = conversations.map((conversation: IConversation) => (
    <Conversation conversation={conversation} key={conversation._id} />
  ));

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? (
        <span className="loading loading-spinner mx-auto my-auto"></span>
      ) : (
        conversationList
      )}
    </div>
  );
};

export default UserList;
