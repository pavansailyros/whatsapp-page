import React from 'react'
import { videoCallImg } from '../assets/images';
import LearnMore from '../components/LearnMore';
import { rightArrow } from '../assets/icons';

const Videocall = () => {
  return (
    <section className=' flex justify-between items-center max-lg:flex-col  w-full max-container'>
        <div className=' flex flex-1 flex-col lg:mx-[65px] md:mx-0 mx-6 my-0'>
            <h2 className=' font-hleveticaneue lg:text-5xl md:text-4xl text-2xl  font-medium text-black-color
                           lg:max-w-lg'>
            Never miss a <br  className="lg:block hidden"/>
            moment with <br  className="lg:block hidden"/>
            voice and video <br  className="lg:block hidden"/>
            calls
            </h2>
            <p className=' my-4 md:max-w-[29rem] font-hleveticaneue text-black-color lg:text-base text-lg  '>
            From a group call to classmates to a quick call with mom,
            feel like you’re in the same room with voice and video
              calls.
            </p>
            <div className=' mt-3'>
                <LearnMore lable={'Learn more'} iconURL={rightArrow}  />
            </div>
        </div>
        <div className=' flex flex-1 justify-center items-center'>
            <img src={videoCallImg}
            alt='videocallimage'
            className='object-contain lg:w-[21rem] md:w-56 w-52 lg:pt-0 pt-10'/>
        </div>
    </section>
  )
}

export default Videocall
