import React from 'react'

const LearnMore = ({lable, iconURL}) => {
  return (
    <div>
    <button className=' mt-3 text-[16px] font-hleveticaneue text-black-color
    cursor-pointer  relative inline-flex justify-center items-center
     hover:text-coral-green 
    '>
         {lable}
        <img src={iconURL}
        alt='rightarrow'
        width={20}
        height={20}
        className=' ml-3'
        />
        

    </button>
    <div className=' bg-coral-green absolute
      h-[2px] w-20 '></div>
    </div>
    
    
  )
}

export default LearnMore
