import React from 'react'

function Card({img}) {
  return (
    <div className=' bg-[#fff] px-5 py-3 flex justify-center items-center rounded-md '>
      <img src={img} alt="" />
    </div>
  )
}

export default Card