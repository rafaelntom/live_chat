const Conversation = () => {
  return (
    <>
      <div className="flex gap-4 items-center hover:bg-sky-700 rounded p-2 py-1 cursor-pointer mt-1">
        <div className="">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img
                src="https://avatar.iran.liara.run/public/boy?username=rafael"
                alt="user avatar"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between">
            <p className="font-open-sans  text-lg text-white">Rafael</p>
            <span>🎃</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default Conversation;
