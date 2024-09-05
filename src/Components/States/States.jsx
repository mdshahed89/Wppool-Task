import React from 'react'
import Select from '../Index/Select'
import CustomSlider from './CustomSlider'
import { IoMdArrowDropdown } from "react-icons/io";


function States() {
  return (
    <div className=' max-w-[1300px] mx-auto py-8 px-3 ' >
        <div className=' flex flex-col gap-2 '>
            <h2 className=' text-[2rem] '>State of USA</h2>
            <Select fShow="2024" />
            <p>Click through the slides or download the report to view natively on your device.</p>
        </div>
        <div className=' '>
          <CustomSlider />
        </div>
        <div className=' mx-[7rem] md:mx-[8rem]  -mt-7 flex items-center justify-between '>
          <div className=' flex items-center gap-2 '>
          <p>pages</p>
          <div className=' bg-[#fff] px-4 py-2 rounded-full flex items-center gap-5 '>
            <p>1 and 2</p>
            <IoMdArrowDropdown />
          </div>
          <p>of 37</p>
        </div>
        <div className=' bg-[#2042B6] rounded-full px-6 py-2 text-[#fff] '>
          <h4>Download the 2023 Report</h4>
        </div>
          </div>
    </div>
  )
}

export default States