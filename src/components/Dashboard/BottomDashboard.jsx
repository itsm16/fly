import React from "react";
import UserCard from "./UserCard";

function BottomDashboard() {
  return (
    <div className="h-full w-full rounded-md bg-white text-black">
      <div className="text-sm h-fit font-semibold px-2">User Management</div>

      <div className="h-[85%] w-full border-b-[#199FB1] border-b-2 border-t-0 border-r-0 border-l-0 overflow-auto">
        <table className="w-full border-collapse">
          <thead className="w-full">
            <tr className="w-full flex justify-between items-center border-b-[#199FB1] border-b-2 px-5">
              <th className="flex gap-10 items-center min-w-[45%] max-w-[450px]">
                <input type="checkbox" className="bg-white" />
                <span className="font-semibold">User</span>
              </th>
              <th className="font-semibold w-[20%] text-center">
                Block/Unblock
              </th>
              <th className="font-semibold w-[20%] text-center">Rating</th>
              <th className="font-semibold w-[15%] text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="w-full">
            <UserCard />
            <UserCard />
            <UserCard />
          </tbody>
        </table>
      </div>

      <div className="flex flex-column items-center h-[10%]">
        <div className="flex mx-5 w-full justify-between">
          <button className="text-sm text-gray-600">Delete</button>
          <div>
            <div className="text-sm">Displaying page</div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomDashboard;
