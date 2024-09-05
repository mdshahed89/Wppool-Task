import React from "react";
import NetworkGraph from "../NetworkGraph";
import { IoArrowDownOutline } from "react-icons/io5";


function Hero() {
  return (
    <div className=" h-[70vh] bg-[#2042B6] ">
      <div className=" max-w-[1300px] h-full mx-auto relative ">
        <div className=" flex items-center h-full justify-center ">
          <NetworkGraph />
        </div>
        <div className=" absolute bottom-10 left-10 ">
          <div className=" flex flex-col gap-6 ">
            <div>
              <h1 className=" text-[3rem] leading-tight text-[#fff] ">60</h1>
              <h4 className=" text-[1rem] text-[#CDCDCD] ">Companies</h4>
            </div>
            <div>
              <h1 className=" text-[3rem] leading-tight text-[#fff] ">$100B</h1>
              <h4 className=" text-[1rem] text-[#CDCDCD] ">Market Cap</h4>
            </div>
            <div>
              <h1 className=" text-[3rem] leading-tight text-[#fff] ">3.5X</h1>
              <h4 className=" text-[1rem] text-[#CDCDCD] ">Revenue Multiple</h4>
            </div>
            <div>
              <h1 className=" text-[3rem] leading-tight text-[#fff] ">60%</h1>
              <h4 className=" text-[1rem] text-[#CDCDCD] ">
                LTM avh. revenue growth rate
              </h4>
            </div>
          </div>
          
        </div>
        <div className=" absolute w-full h-full top-0 flex items-center justify-center flex-col z-30 ">
            <h1 className=" text-[#fff] text-[4rem] ">The WPPOOL Index</h1>
            <h5 className=" text-[#CDCDCD] text-center ">Monitor the performance of emerging, publicly traded, financial technology companies</h5>
          </div>
          <div className=" shadow-lg shadow-[#1f1f1f] absolute right-10 bottom-10 text-xl text-[#2042B6] p-3 bg-[#fff] rounded-full ">
            <IoArrowDownOutline />
          </div>
          {/* <div className=" heroShape border border-[#fff] absolute w-[10rem] h-[30rem] top-0 z-50  ">

          </div> */}
          
      </div>
    </div>
  );
}

export default Hero;
