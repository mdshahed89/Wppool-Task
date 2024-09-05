import React from 'react'

function Card({img, down}) {
  return (
    <div className={` bg-[#fff] p-5 rounded-lg ${down ? "mt-16" : null}  `}>
        <div>
            <img src={img} alt="" className=' mt-[-4rem] ' />
        </div>
        <div className=' flex flex-col justify-start '>
            <p className=' text-[#2042B6] '>By: Sahabuddin Sagor</p>
            <p className=' my-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.</p>
            <div className=' bg-[#2042B6] w-[7rem] flex justify-center items-center py-1 rounded-full text-[#fff] '>
                <button>Read more</button>
            </div>
        </div>
    </div>
  )
}

export default Card