import ChatContainer from "../../components/Chat/ChatContainer";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 min-h-full items-center">
      <div className="flex p-10 max-h-[70vh]">
        <Sidebar />
        <ChatContainer />
      </div>
    </div>
  );
};
export default Home;
