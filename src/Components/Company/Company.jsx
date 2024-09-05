import React from 'react'
import { IoSearch } from "react-icons/io5";
import Table from './Table';


function Company() {
  return (
    <div className=' max-w-[1300px] mx-auto px-3 ' >
        <div className=' flex md:items-center md:flex-row flex-col justify-between '>
            <h2 className=' text-[3rem] '>All Companies</h2>
            <div className=' relative '>
                <input type="text" placeholder='Search Companies' className=' bg-[#DADADADA] py-2 w-96 rounded-lg pl-10 outline-none pr-3 placeholder:text-[1.2rem] placeholder:text-[#191618] ' />
                <IoSearch className=' absolute top-0 left-3 text-[1.2rem] text-[#191618] h-full flex items-center  ' />
            </div>
        </div>
        <div>
            <Table />
        </div>
        <div className=' flex items-center justify-center gap-4 '>
            <div className=' bg-[#2042B6] rounded-full px-4 py-1 text-[#fff] shadow-2xl shadow-black '>
                <h3>Download 'All Companies' Data</h3>
            </div>
            <div className=' bg-[#2042B6] rounded-full px-4 py-1 text-[#fff] shadow-2xl shadow-black '>
                <h3>View Methodology</h3>
            </div>
        </div>
    </div>
  )
}

export default Company