import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdShare } from "react-icons/io";
import Items from "./Items";


function Header() {
  return (
    <div className=" bg-[#2042B6]   ">
      <div className=" max-w-[1300px]  h-[4rem] mx-auto flex items-center justify-between px-[2%] ">
        <div className=" ">
          <img src={Logo} alt="" className="  " />
        </div>
        <div className=" flex items-center gap-4 text-[#fff] ">
            <div className=" border border-[#fff] rounded-full p-2 ">
                <IoMdShare />
            </div>
            <div className=" border border-[#fff] py-1 px-3 rounded-full ">
                <h4>Download the 2024 Report</h4>
            </div>
            <div>
                <Items />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
