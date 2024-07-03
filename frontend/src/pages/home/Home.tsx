import { MessagesContainer } from "../../components/Chat/MessagesContainer";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 min-h-full items-center">
      <div className="flex max-h-[70vh]  drop-shadow-2xl">
        <Sidebar />
        <MessagesContainer />
      </div>
    </div>
  );
};
export default Home;
