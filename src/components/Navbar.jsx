import React, { useState } from 'react'
import { whatsappLogo } from '../assets/images';
import { navlinks } from '../constants';
import Button from './Button';
import { download, dropDown, hamburger,close } from '../assets/icons';



const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <header className='fixed top-0 w-full padding-x  py-3.5  sm:h-20  h-0  bg-primary  z-50'>
        <nav className=' flex justify-between items-center max-container'>
             <div className=' hidden max-xl:flex 
             flex-1 items-center justify-start  ' >
              <img src={ toggle ? close : hamburger}
              alt='hamburger' 
              height={25}
              width={25}
              className=' object-contain'
              onClick={() => setToggle((prev)=>  !prev)}/>
              <div className={` ${toggle ? 'flex'  :
               'hidden' }  fixed  pt-[70px]  
                top-10 w-full    left-0 mx-4  my-2  rounded-xl h-screen w-scree  box-border overflow-x-hidden 
              overflow-y-auto overscroll-contain  transition-transform  bg-primary z-[1000]  bidi-isolate right-0 `}>
               <ul className='  list-none flex flex-1  flex-col 
               visible  gap-4  font-helvetica
                text-xs   
                text-black-color cursor-pointer lg:bg-transparent 
                   '>
                <a className=' flex lg:bg-transparent' href='#home'>Home  </a>
              <div>
                <a  className=' flex' href='#features'>Features
                <img src={dropDown}
                 width={20}
                 height={20}
                 className=' ml-1.5'/>
                </a>
              </div>
              {navlinks.map((item) =>(
                <li key={item.label}>
                  <a href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
              </div>
            </div>
            <a href='/'>
                <img src={whatsappLogo}
                     alt='logo'
                     height={30.5}
                     width={130} 
                 />
            </a>
            <ul className=' flex flex-1 justify-center gap-10 ps-14 max-xl:hidden  font-hleveticaneue
                            text-lg leading-[-0.1em] text-black-color cursor-pointer '>
              <div>
                <a
                className=' flex hover:text-coral-green ' href='#features'>Features
                <img src={dropDown}
                 width={20}
                 height={20}
                 className=' ml-1.5  '/>
                </a>
              </div>
              {navlinks.map((item) =>(
                <li className=' hover:text-coral-green' key={item.label}>
                  <a  href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className=' mr-6 max-lg:hidden'>
            <Button lable={'Download'} iconURL={download}  />
            </div>            
        </nav>
    </header>
  )
}

export default Navbar