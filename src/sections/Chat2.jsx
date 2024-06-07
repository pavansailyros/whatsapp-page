import React from 'react'
import LearnMore from '../components/LearnMore';
import { rightArrow } from '../assets/icons';
import {  chat2Overlay, girlSmile } from '../assets/images';

const Chat2 = () => {
  return (
    <section className=' flex justify-between  items-center  w-full max-container  max-lg:flex-col-reverse'>
        <div className=' flex flex-1  justify-center items-center relative ml-20 mr-14 '>
            <img src={girlSmile}
            alt='girl smile'
            className='object-contain lg:w-[20rem] md:w-52 w-52 lg:pt-0 pt-10 '/>  
             <img src={chat2Overlay}
            alt='overlay'
            className='object-contain lg:w-[22rem] md:w-56 w-[40rem] absolute lg:top-40 top-28 
                      lg:left-16 md:-left-3 -left-7 bg-transparent  '/>                  
          </div>
        <div className=' flex flex-1 flex-col lg:mx-[65px] md:mx-0 mx-0 my-0  lg:pl-0 md:pl-0 pl-5'>
            <h2 className=' font-hleveticaneue lg:text-5xl md:text-4xl text-2xl  font-medium text-black-color
             lg:max-w-lg '>
            Say what <br  className="lg:block hidden"/>
            you feel<br  className="lg:block hidden"/>
            </h2>
            <p className=' my-4 md:max-w-[29rem] font-hleveticaneue text-black-color lg:text-base text-lg '>
            Express yourself without words. Use stickers and GIFs or
            share everyday moments on Status. Record a voice
            message for a quick hello or a longer story.
            </p>
            <div className=' mt-3'>
                <LearnMore lable={'Learn more'} iconURL={rightArrow}  />
            </div>
        </div>
    </section>
  )
}

export default Chat2
