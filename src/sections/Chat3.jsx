import React from 'react'
import { businessChat } from '../assets/images';
import LearnMore from '../components/LearnMore';
import { rightArrow } from '../assets/icons';

const Chat3 = () => {
  return (
    <section className=' flex justify-between  items-center max-lg:flex-col  w-full max-container'>
        <div className=' flex flex-1 flex-col lg:mx-[65px] md:mx-0 mx-6 my-0'>
            <h2 className=' font-hleveticaneue lg:text-5xl md:text-4xl text-2xl  font-medium text-black-color
             lg:max-w-lg'>
            Transform <br  className="lg:block hidden"/>
            your business 
            </h2>
            <p className=' my-4 md:max-w-[29rem] font-hleveticaneue text-black-color lg:text-base text-lg  '>
            WhatsApp Business helps you reach your customers
            globally to deliver compelling experiences at scale. 
            Showcase your products and services, increase sales, 
            and build relationships all with WhatsApp.
            </p>
            <div className=' mt-3'>
                <LearnMore lable={'Learn more'} iconURL={rightArrow}  />
            </div>
        </div>
        <div className=' flex flex-1  justify-center items-center lg:px-28 '>
            <img src={businessChat}
            alt='businesschat image'
            className='object-contain lg:w-[20rem] md:w-56 w-52 lg:pt-0 pt-10'/>
        </div>
    </section>
  )
}

export default Chat3
