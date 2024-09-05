import React from 'react'
import LineChart from '../LineChart'
import Card from './Card'
import Third from './Third'

function Right() {
  return (
    <div>
        <div className=' flex  '>
            <h2 className=' text-[3rem] '>The WPPOOL Index</h2>
        </div>
        <div className=' grid grid-cols-2 md:grid-cols-4 gap-4 '>
            <Card pcg="+66.2" color="text-[#FC714D]" bgColor="bg-[#FC714D]" name="WPPOOL" />
            <Card pcg="+26.6" color="text-[#615DE3]" bgColor="bg-[#615DE3]" name="Goolge" />
            <Card pcg="+34.1" color="text-[#7CA63A]" bgColor="bg-[#7CA63A]" name="Microsoft" />
            <Card pcg="+17" color="text-[#6F34A1]" bgColor="bg-[#6F34A1]" name="Twitter" />
        </div>
        <div className=' mb-4 '>
            <Third />
        </div>
        <LineChart />
    </div>
  )
}

export default Right