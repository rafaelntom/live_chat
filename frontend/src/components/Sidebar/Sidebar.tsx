import { BiLogOut } from "react-icons/bi";

import SearchInput from "./SearchInput";
import UserList from "./UserList";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col bg-sky-950 rounded-l-lg">
      <SearchInput />
      <div className="divider px-3"></div>
      <UserList />
      <div className="mt-auto">
        <BiLogOut className="min-w-6 min-h-6 text-white cursor-pointer mt-5" />
      </div>
    </div>
  );
};

export default Sidebar;
