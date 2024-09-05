import React, { useEffect, useRef, useState } from 'react';
import { HiBars3 } from "react-icons/hi2";
import { IoMdShare } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';


export default function Items() {
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const items = ['The WPPOOL Index', 'All Companies', 'Potential Future Listings', 'State of USA', 'Stories & Ideas', 'About WPPOOL', 'WPPOOL Portfolio Companies'];
  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) setOpen(false)
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close)
  }, []);

  return (
      <div ref={dropDownRef} className="relative mx-auto w-fit text-[#fff]">
        <button onClick={() => setOpen((prev) => !prev)} className="  ">
            <HiBars3 className=' text-2xl ' />
        </button>
        <ul className={`${open ? 'visible' : 'invisible'} absolute -top-4 right-0 p-[1rem] z-50 w-[23rem] rounded-sm bg-[#FFFFFF] shadow-md`}>
            <div className=' flex items-center justify-between gap-3 mb-6  '>

            <div className=" border border-[#fff] text-[#fff] bg-[#AFCD80] rounded-full p-2 ">
                <IoMdShare />
            </div>
            <div className=" border border-[#fff] bg-[#2042B6] text-[#fff] py-1 px-3 rounded-full ">
                <h4>Download the 2024 Report</h4>
            </div>
            <div>
                <RxCross2 onClick={()=> setOpen(!open)} className=' text-2xl text-[#000] cursor-pointer ' />
            </div>

            </div>
          <div className=' flex flex-col gap-2 '>
          {items.map((item, idx) => (
            <NavLink href="#index" id='index'  key={idx} className={`rounded-sm px-2 py-2 ${open ? 'opacity-100 duration-300' : 'opacity-0 duration-150'} cursor-pointer text-[#000] hover:bg-[#bdbdbd]`}>
              {item}
            </NavLink>
          ))}
          </div>

          <div>
            <h3 className=' text-[#2042B6] mt-6 pb-4 '>Visit WPPOOL</h3>
          </div>
        </ul>
      </div>
  )}