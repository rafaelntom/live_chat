import { MessagesContainer } from "../../components/Chat/MessagesContainer";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 min-h-full items-center">
      <div className="flex  min-h-[70vh] max-h-[70vh] max-w-[1000px] drop-shadow-2xl ">
        <div className="left-container flex flex-col">
          <Sidebar />
        </div>
        <div className="right-container flex flex-1 flex-grow">
          <MessagesContainer />
        </div>
      </div>
    </div>
  );
};
export default Home;
