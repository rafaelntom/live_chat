import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      return;
    }
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search…"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input input-bordered rounded-full"
      />
      <button
        type="submit"
        className="btn btn-circle bg-sky-800 border border-sky-400 text-white"
      >
        <IoSearchSharp className="w-6 h-6 " />
      </button>
    </form>
  );
};

export default SearchInput;
