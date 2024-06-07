import React from 'react'

const LearnMoreWhite = ({lable}) => {
  return (
    <div className=' bg-coral-black'>
    <button className=' mt-3 text-[16px] font-hleveticaneue text-white bg-coral-black
    cursor-pointer  relative inline-flex justify-center items-center
     hover:text-coral-green 
    '>
         {lable}
        
        
    
        

    </button>
    <div className=' bg-coral-green absolute
      h-[2px] w-20 '></div>
    </div>
  )
}

export default LearnMoreWhite
