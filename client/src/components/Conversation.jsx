import React from "react";

const Conversation = () => {
  return (
    <>
      {/* //hover:bg-sky-500 */}
      <div className="flex gap-2 p-2 items-center rounded hover:bg-blue-700 hover:bg-opacity-50 px-2py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">John Doe</p>
          </div>
        </div>
        <div className="divider my-0 py-0 h-1"></div>
      </div>
    </>
  );
};

export default Conversation;
