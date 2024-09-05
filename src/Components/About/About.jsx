import React from 'react'
import AboutImg from "../../assets/AboutImg.png"

function About() {
  return (
    <div className=' max-w-[1300px] mx-auto my-[5rem] py-[6rem] border-y border-[#90B8F0]  '>
        <div className=' flex justify-between  bg-[#fff] rounded-lg pl-[5%]  '>
        <div className=' w-[50%] flex flex-col gap-3 pt-[3%]'>
            <h2 className=' text-[2rem] '>About WPPOOL</h2>
            <h3 className=' text-[#7D7F81] text-[1.5rem] '>Investing in wppool for over 50 years</h3>
            <h4 className=' text-base '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.</h4>
            <div className=' w-[12rem] mt-8 text-[#fff] flex items-center justify-center text-base  py-2 rounded-full bg-[#2042B6] '>
              <button>Contact WPPOOL</button>
            </div>
        </div>
        <div className=' h-[25rem] '>
            <img src={AboutImg} alt="" className=' h-full object-cover ' />
        </div>
        </div>
    </div>
  )
}

export default About