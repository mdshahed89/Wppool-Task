import React from 'react'
import Card from './Card'
import ListImg1 from "../../assets/ListImg1.png"
import ListImg2 from "../../assets/ListImg2.png"
import ListImg3 from "../../assets/ListImg3.png"
import ListImg4 from "../../assets/ListImg4.png"
import ListImg5 from "../../assets/ListImg5.png"
import ListImg6 from "../../assets/ListImg6.png"
import ListImg7 from "../../assets/ListImg7.png"
import ListImg8 from "../../assets/ListImg8.png"
import ListImg9 from "../../assets/ListImg9.png"
import ListImg10 from "../../assets/ListImg10.png"

function Listing() {
  return (
    <div className=' max-w-[1300px] mx-auto my-10 px-3 '>
        <div>
            <h2 className=' text-[2.5rem] '>Potential Future Listings</h2>
            <p className=' max-w-[800px] '>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
        </div>
        <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6 '>
            <Card img={ListImg1} />
            <Card img={ListImg2} />
            <Card img={ListImg3} />
            <Card img={ListImg4} />
            <Card img={ListImg5} />
            <Card img={ListImg6} />
            <Card img={ListImg7} />
            <Card img={ListImg8} />
            <Card img={ListImg9} />
            <Card img={ListImg10} />
        </div>
    </div>
  )
}

export default Listing