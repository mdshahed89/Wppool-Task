import React from 'react'
import Card from './Card'
import StoryImg1 from "../../assets/StoryImg1.png"
import StoryImg2 from "../../assets/StoryImg2.png"

function Stories() {
  return (
    <div className=' max-w-[1300px] mx-auto py-10 '>
        <div>
            <h2 className=' text-[2rem] '>Stories & Ideas</h2>
            <p>The latest news and updates</p>
        </div>
        <div className=' grid grid-cols-3 gap-4 mt-16 '>
            <Card img={StoryImg1} />
            <Card img={StoryImg2} />
            <Card img={StoryImg1} />
            <Card img={StoryImg2} down={true} />
            <Card img={StoryImg1} down={true} />
            <Card img={StoryImg2} down={true} />
        </div>
    </div>
  )
}

export default Stories