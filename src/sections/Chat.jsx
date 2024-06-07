import React from 'react'
import LearnMore from '../components/LearnMore';
import { rightArrow } from '../assets/icons';
import { bestFriendGroupChatImg, bestFriendGroupImg, smBestFriendGroupChat } from '../assets/images';

const Chat = () => {
  return (
    <section className=' flex justify-between items-center max-lg:flex-col  w-full max-container'>
        <div className=' flex flex-1 flex-col lg:mx-[65px] md:mx-0 mx-0 my-0  lg:pl-0 md:pl-0 pl-5'>
            <h2 className=' font-hleveticaneue lg:text-5xl md:text-4xl text-2xl  font-medium text-black-color
             lg:max-w-lg '>
            Keep in touch <br className="lg:block hidden"/>
            with your groups
            </h2>
            <p className=' my-4 md:max-w-[29rem] font-hleveticaneue text-black-color lg:text-base text-lg '>
            Whether it's planning an outing with friends or simply
             staying on top of your family chats, group conversations 
             should feel effortless.
            </p>
            <div className=' mt-3'>
                <LearnMore lable={'Learn more'} iconURL={rightArrow}  />
            </div>
        </div>
          <div className=' flex flex-1  justify-center items-center relative md:mr-24 mr-0'>
            <img src={bestFriendGroupImg}
            alt='gif'
            className='object-contain lg:w-[21rem] md:w-56 w-52 lg:pt-0 pt-10 lg:h-full md:h-[25rem] h-[23rem]'/>  
             <img src={bestFriendGroupChatImg}
            alt='gif'
            className=' md:block hidden object-contain lg:w-[25rem] md:w-56 w-[40rem] absolute 
                      lg:top-[5.6rem] md:top-24 top-28 lg:left-16 md:-left-3 -left-7 bg-transparent '/>
              <img src={smBestFriendGroupChat}
                   alt='gif'
                   className=' md:hidden block object-contain lg:w-[25rem] md:w-56 w-[40rem] absolute 
                               lg:top-[5.6rem] top-28  lg:left-16 md:-left-3 -left-5 bg-transparent '/>                                    
          </div>
    </section>
  )
}

export default Chat
