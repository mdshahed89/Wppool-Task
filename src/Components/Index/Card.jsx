import React from 'react'

function Card({pcg, name, color, bgColor}) {
  return (
    <div className=' bg-[#F3F3F3] rounded-lg flex items-center justify-between p-2 '>
        <h2 className={` ${color} text-[1.5rem] `}>{pcg}%</h2>
        <div className=' flex items-center h-full gap-3 '>
        <div className=' text-[.8rem] '>
            <h4 className=' leading-tight '>{name}</h4>
            <h4 className=' text-end '>Index</h4>
        </div>
        <div className={` ${bgColor} w-1 h-full `}></div>
        </div>
    </div>
  )
}

export default Card