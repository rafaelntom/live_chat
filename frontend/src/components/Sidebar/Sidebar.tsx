import { BiLogOut } from "react-icons/bi";

import useLogout from "../../hooks/useLogout";
import SearchInput from "./SearchInput";
import UserList from "./UserList";

const Sidebar = () => {
  const { logout } = useLogout();

  return (
    <div className="border-r border-slate-500 p-4 flex flex-col bg-sky-950 rounded-l-lg w-min max-w-[300px]">
      <SearchInput />
      <div className="divider px-3"></div>
      <UserList />
      <div className="mt-auto">
        <button onClick={logout}>
          <BiLogOut className="min-w-6 min-h-6 text-white cursor-pointer mt-5" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
