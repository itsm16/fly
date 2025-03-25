import React from "react";
import { useLocation } from "react-router";
import logo from '../assets/logo.png'

function Nav() {
  const { pathname } = useLocation();

  return (
    <div className="bg-white h-full w-full rounded-lg text-[#199FB1] flex flex-col items-center gap-1 divide-y divide-gray-500/20 justify-evenly">
      <div className="w-full flex items-center justify-center">
        <img src={logo} alt="" className="h-[55px] mb-[2px]" />
      </div>
      {[
        "Dashboard",
        "User Management",
        "Rating and Review",
        "Settings",
        "History",
        "All Bookings",
        "Push Notification",
        "Transaction List",
        "Google Analytics",
        "Multi-Currency",
        "Category",
        "Live Chat History",
        "Package Plan",
        "Referral History",
        "Google Map",
      ].map((ele, index) => (
        <div key={index} className="w-full flex items-center justify-center">
          <div className="h-full flex items-center pb-3">
            <div
              className={`w-full flex items-center justify-center text-sm font-semibold px-3 rounded-md ${
                pathname.toLowerCase().includes(ele.toLowerCase())? "bg-[#199FB1] text-white": ""}`}
            >
              {ele}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Nav;
