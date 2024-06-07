import React from 'react'
import { chat, emoji, girls, heart, message, mug, voiceMessage } from '../assets/images';
import Button from '../components/Button';
import { download } from '../assets/icons';

const BackgroundImage = () => {
  return (
    <section>
    <div className=' bg-motherDaughter-img bg-cover bg-center sm:h-[48rem] h-[40rem]
     rounded-3xl bg-transparent 
         max-w-full  m-8 overflow-clip  bg-clip-content  bg-blend-overlay  relative  md:top-20 top-7'>        
        <div className=' absolute lg:inset-x-16 inset-y-1/2 transform -translate-y-1/2  flex flex-col justify-center
             items-start p-4 lg:p-8 bg-transparent  lg:gap-0 md:gap-10 sm:gap-0'>
          <h1 className=' bg-transparent mb-6  text-white  sm:text-[80px] text-[40px] leading-3 tracking-tighter
              font-hleveticaneue font-[400] ms-7 me-7 '>
            Message 
            </h1>
            <h1 className=' bg-transparent lg:mb-6  mb-0  text-white  sm:text-[80px] text-[40px] leading-3
                tracking-tighter font-hleveticaneue font-[400] ms-7 me-7 lg:pt-14 pt-0 '>
            privately 
            </h1>
            <div className=' text-lg mb-6 bg-transparent text-white text-[18.5px]  leading-[25px] 
                font-hleveticaneue my-[1em] ms-7 me-7 '>
            <p className=' bg-transparent '> 
            Simple, reliable, private messaging and
            </p> 
          <p className=' bg-transparent'>  calling for free*, available all over the</p>
          <p className=' bg-transparent'>   world.</p>
          </div>
          <div className=' bg-transparent  ms-5 me-5 pt-10'>
              <Button lable={'Download'} iconURL={download} /></div>
          </div>
{/* float chat start */}
          <div className=' absolute sm:right-28  right-0 rounded-lg  p-4 bg-transparent pt-16 flex '>
              <div  className=' flex  bg-transparent'>
                 <img src={message}
                      alt='message'
                      className=' bg-transparent sm:h-10  sm:ml-96 ml-1'/>
               </div>
              <div className=' lg:flex bg-transparent absolute right-20 pt-4 hidden '>
                 <img  src={heart}
                       alt='heart'
                       className=' bg-transparent max-w-full sm:h-10 rounded-full'/>
              </div>
              <div className=' flex bg-transparent absolute  right-4 pt-11 '>
                <img  src={mug}
                      alt='mug'
                      className=' bg-transparent lg:h-28 h-full rounded-full'/>
             </div>
             <div className=' lg:flex bg-transparent absolute right-0 pt-44 hidden'>
               <img  src={voiceMessage}
                     alt='voicemessage'
                     className=' bg-transparent h-16 '/>
             </div>
             <div className=' lg:flex bg-transparent absolute  right-5 pt-[245px] hidden'>
               <img  src={girls}
                     alt='girls'
                  className=' bg-transparent h-64 '/>
             </div>
             <div className='lg:flex bg-transparent absolute right-20 pt-[30rem] hidden'>
               <img  src={emoji}
                     alt='emoji'
                     className=' bg-transparent max-w-full h-10 rounded-full'/>
             </div>
             <div className=' flex bg-transparent absolute right-8 pt-[34.9rem] '>
               <img  src={chat}
                     alt='chat'
                     className=' bg-transparent max-w-full h-14 rounded-full'/>
              </div>
          </div>
          {/* float chat stopped */}
    </div>

    <div className=' font-hleveticaneue text-sm 
     text-gray-500 flex justify-end
       items-center md:mt-24 mt-0'>
      <p>
      * Data charges may apply. Contact your provider for details.
      </p>
    </div>
  
    </section>

  )
}

export default BackgroundImage
 