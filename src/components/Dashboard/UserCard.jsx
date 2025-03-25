import React, { useState } from "react";

function UserCard() {
  const [block, setBlock] = useState(false);
  return (
    <tr className="w-full flex justify-between items-center border-b-gray-300 border border-r-0 border-l-0 py-1 px-5">
      <td className="flex gap-10 items-center min-w-[45%] max-w-[450px]">
        <input type="checkbox" className="bg-white" />
        <div className="avatar">
          <div className="w-[30px] rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            John Doe
          </div>
        </div>
      </td>
      <td className="w-[20%] text-center">
        {block ? (
          <button
            onClick={() => setBlock(false)}
            className="btn rounded-lg font-thin bg-red-600 h-7 w-[90px] shadow-none border-none"
          >
            Unblock
          </button>
        ) : (
          <button
            onClick={() => setBlock(true)}
            className="btn rounded-lg font-thin bg-white text-red-600 h-7 shadow-none w-[90px] border-red-600"
          >
            Block
          </button>
        )}
      </td>
      <td className="w-[20%] text-center">⭐⭐⭐⭐</td>
      <td className="w-[15%] text-center">
        <button className="btn bg-inherit text-black border-none shadow-none">
          ...
        </button>
      </td>
    </tr>
  );
}

export default UserCard;
