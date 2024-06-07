import React from 'react'
import { encriptedImg } from '../assets/images';
import LearnMoreWhite from '../components/LearnMoreWhite';

const Privacy = () => {
  return (
    <section className=' bg-coral-black flex  justify-between items-center max-lg:flex-col-reverse gap-10 
                       max-container   '>
        <div className=' flex lg:ml-20 ml-4  '>
            <img src={encriptedImg}
            alt='encripted img'
            height={649}
            width={528}
            className=' bg-coral-black  object-contain '/>
        </div>
        <div className=' flex  flex-col bg-coral-black lg:ml-20 md:-ml-9'>
            <h2 className=' bg-coral-black  font-hleveticaneue lg:text-5xl md:text-4xl text-2xl text-white
                           lg:max-w-lg '>
            Speak<br></br>
            <span className=' bg-coral-black text-coral-green'>freely</span>
            </h2>
            <p className=' bg-coral-black mt-5 lg:max-w-lg font-hleveticaneue text-white
                           lg:text-xl md:text-lg leading-6  lg:tracking-wide md:tracking-tight lg:mr-16 md:mr-60 '>
            With end-to-end encryption, your personal messages and 
            calls are secured. Only you and the person you're talking
            to can read or listen to them, and nobody in between, not
            even WhatsApp.
            </p>
            <div className=' mt-10 flex flex-wrap gap-4 bg-coral-black'> 
            <LearnMoreWhite
                lable={'Learn more'} />
            </div>
        </div>
    </section>
  )
}
export default Privacy
