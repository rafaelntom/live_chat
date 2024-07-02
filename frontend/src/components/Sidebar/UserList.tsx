import Conversation from "./Conversation";

const UserList = () => {
  return (
    <div className="py-2 flex flex-col overflow-auto max-h-[90%]">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default UserList;
