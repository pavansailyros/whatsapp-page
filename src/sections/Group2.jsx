import React from 'react'
import { group2, mediumGroup2, smallGroup2 } from '../assets/images'

const Group2 = () => {
  return (
    
       <section>
        <div className=' px-8 py-7 max-w-full '>
            <img src={ group2 }
                 alt='group2'
                 className='lg:block hidden w-full h-auto'/>
            <img src={mediumGroup2}
                 alt='mediumGroup2'
                 className=' hidden md:block lg:hidden w-full h-auto'/>
            <img src={smallGroup2}
                 alt='smallGroup2' 
                 className=' md:hidden block'/>
        </div>
    </section>
    
  )
}

export default Group2
