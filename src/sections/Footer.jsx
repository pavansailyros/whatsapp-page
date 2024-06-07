import React from 'react'
import { footerLogo } from '../assets/images'
import Button from '../components/Button';
import { copyRightSign, download } from '../assets/icons';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <footer  className=' max-container bg-coral-black'>
      <div className=' flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap bg-coral-black pt-0
       md:px-28 px-0 pb-[88px] '>
         <div className=' bg-coral-black flex  md:flex-col items-start'>
          <a href='/'>
            <img  src={footerLogo}
             width={160}
             height={94}
             className=' bg-coral-black md:pb-14 pb-0'/>
          </a>
        <div className=' bg-coral-black md:pt-11'>
          <Button lable={'Download'}
          iconURL={download}/>
        </div>
        </div>
        {footerLinks.map((section) => (
          <div  className=" bg-coral-black" key={section}>
            <h5 className=' bg-coral-black
             text-pale-gray  font-helvetica text-sm leading-normal font-medium mb-8'>
              {section.title}
            </h5> 
            <ul className=' bg-coral-black text-white'>
              {section.links.map((link) =>(
                <li  key={link.name}
                 className=' bg-coral-black  mt-3 text-white font-hleveticaneue
                  text-base leading-normal cursor-pointer hover:text-coral-green'>
                  <a className=' bg-coral-black text-white hover:text-coral-green'>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className=' mx-28 ' />
      <div  className=' bg-coral-black  flex items-center justify-around text-white
        mt-5 max-sm:flex-col max-sm:items-center'>
        <div className=' bg-coral-black flex  justify-start items-center gap-2 
         font-helvetica text-sm cursor-pointer'>
            <p className=' bg-coral-black'>
               2024
            </p>
          <img src={copyRightSign}
          alt='copy right sign'
          width={20}
          height={20}
          className=' bg-coral-black rounded-full mt-0'
          />
          <p className=' bg-coral-black'>
            whatsApp LLC
          </p>
        </div>
        <div className=' bg-coral-black'>
          <p className=' bg-coral-black  font-helvetica text-sm'>
            Term & Privacy <br/>
            Polic
          </p>
        </div>
        <div className=' flex items-center gap-5 mt-8 bg-coral-black'>
          {socialMedia.map((icon) =>(
            <div className=' bg-coral-black'>
              <img src={icon.src}
              alt={icon.alt}
              width={35}
              height={35}
              className=' rounded-full text-white'/>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
