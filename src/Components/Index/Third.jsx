import React from "react";
import Select from "./Select";

function Third() {
  return (
    <div className=" mt-7 flex justify-between md:flex-row flex-col gap-3 ">
      <div className=" flex gap-4 lg:flex-row flex-col ">
        <Select fShow="Sectors" />
        <Select fShow="Types of IPO" />
      </div>
      <div className=" ">
        <div className=" flex items-center bg-[#EFF3F6] rounded-full gap-4 text-[#748DA1] pl-14 py-2 px-2  ">
        <div className=" hover:bg-[#2042B6] hover:text-[#fff] px-2 rounded-full cursor-pointer ">
            <h3>1Y</h3>
        </div>
        <div className=" bg-[#2042B6] text-[#fff] px-2 rounded-full cursor-pointer ">
            <h3>YTD</h3>
        </div>
        <div className=" hover:bg-[#2042B6] hover:text-[#fff] px-2 rounded-full cursor-pointer ">
            <h3>6M</h3>
        </div>
        <div className=" hover:bg-[#2042B6] hover:text-[#fff] px-2 rounded-full cursor-pointer ">
            <h3>1M</h3>
        </div>
        <div className=" hover:bg-[#2042B6] hover:text-[#fff] px-2 rounded-full cursor-pointer ">
            <h3>1W</h3>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Third;
