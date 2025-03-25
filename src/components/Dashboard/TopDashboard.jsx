import React from "react";
import { BiBell, BiSearch } from "react-icons/bi";
import UserCount from "./UserCount";
import Graph from "./Graph";

function TopDashboard() {
  return (
    <div className="mt-[4px] h-full w-full text-black rounded-md ">
      <div className="h-[7%] flex border-b-white justify-between">
        <div className="flex h-full bg-white/30 rounded-sm rounded-r-lg">
          <input type="text" className="outline-none ml-1 text-white" />
          <button className="flex items-center justify-center bg-[#199FB1] h-full text-white w-11 rounded-md">
            <BiSearch />
          </button>
        </div>
        <div className="justify-end flex w-[50%]">
          <div className="text-white flex items-center w-[30%] justify-between">
            <div>
              <BiBell size={20}/>
            </div>
            <div className="avatar">
              <div className="w-[30px] rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[93%] border mt-[4px] border-t-white/50 border-b-0 border-r-0 border-l-0">
        <div className="h-[4.5%] text-white text-[11px] mb-[4px]">
          Analytics
        </div>
        <div className="flex gap-[2%] rounded-lg h-[93.5%]">
          <div className="w-[60%] flex flex-col justify-between gap-[4%]">
            <div className=" flex-1/3 flex gap-[3%]">
              <UserCount
                color={"#199FB1"}
                title={"Active Users"}
                style={"active"}
                count={5556}
              />
              <UserCount
                border={"#0FD43E"}
                title={"Total Buyers"}
                style={"buyers"}
                count={3580}
              />
            </div>
            <div className=" flex-1/3 flex gap-[3%]">
              <UserCount title={"Total Ads"} style={"ads"} count={459} />
              <UserCount
                border={"#FF0838"}
                title={"Total Sellers"}
                style={"sell"}
                count={2924}
              />
            </div>
            <div className="bg-white earn rounded-md flex-1/3 text-xs font-semibold flex flex-col items-center justify-between p-1">
              <div className="self-start font-bold">Total Earning</div>
              <div className="mb-5 text-2xl font-bold">12,423,48.00</div>
            </div>
          </div>
          <div className="w-[40%] bg-white h-full rounded-md">
            <Graph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopDashboard;
