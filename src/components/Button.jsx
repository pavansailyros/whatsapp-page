import React from 'react'

const Button = ({lable, iconURL}) => {
  return (
    <button className=' inline-flex justify-center items-center
     gap-2 py-4 px-6 border font-hleveticaneue  
     text-lg  leading-4 bg-coral-green 
     text-black-color    border-black-color  rounded-[50px]  ml-3 font-normal 
       relative z-[1]
       cursor-pointer no-underline hover:bg-black-color hover:text-white '>
        {lable}
        <img src={iconURL}
        alt='download'
        className='ml-2  bg-coral-green '/>
    </button>
  )
}

export default Button
