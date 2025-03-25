import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";

function Login() {
  return (
    <div className="h-screen flex items-center justify-center border bg">
      <div className="flex items-center w-[85%] h-[85%] bg-[#D9D9D9]/30 rounded-xl backdrop-blur-sm">
        <div className=" w-[50%] flex items-center justify-center">
          <img src={logo} alt="" className="w-[200px]" />
        </div>
        <div className="h-[90%] border relative border-[#E25845] flex flex-col items-center justify-between">
          <div className="bg-[#E25845] w-2 h-2 rounded-full left-[-4px] top-[-1px] absolute"></div>
          <div className="bg-[#E25845] w-2 h-2 rounded-full left-[-4px] bottom-[-1px] absolute"></div>
        </div>
        <div className="w-[50%] h-full flex items-center justify-center">
          <div className="text-black w-[65%] h-[75%] bg-white rounded-md flex items-center justify-center">
            <div className="h-[80%] w-[80%] flex flex-col items-center justify-between">
              <div className=" w-full">
                <div className="font-bold text-2xl">Log in</div>
                <div className="text-sm">
                  Welcome to Free shops App controller
                </div>
              </div>
              <div className=" w-full flex items-center flex-col gap-1">
                <div className="w-full">
                  <div className="text-sm font-semibold">Email</div>
                  <input
                    type="text"
                    className="btn bg-inherit shadow-none outline-none border-gray-400 h-7 w-full "
                  />
                </div>
                <div className="w-full">
                  <div className="text-sm font-semibold">Password</div>
                  <input
                    type="text"
                    className="btn bg-inherit shadow-none outline-none border-gray-400 h-7 w-full "
                  />
                </div>
                <Link className="text-xs mt-2 font-light text-gray-600">Forgot Password</Link>
                <button className="bg-[#199FB1] mt-6 btn w-[100px] rounded-lg text-lg font-bold  shadow-none border-none">
                  Log in
                </button>
              </div>
              <Link className="text-[#7CB5EC]">Create New Account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
