import React from 'react'

function Card({img}) {
  return (
    <div className=' bg-[#fff] px-7 py-3 rounded-lg flex items-center justify-center '>
        <img src={img} alt="" className='  ' />
    </div>
  )
}

export default Card