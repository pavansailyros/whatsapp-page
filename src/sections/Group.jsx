import React from 'react'
import { group1, mediumGroup1, smallGroup } from '../assets/images'

const Group = () => {
  return (
    <section>
        <div className='  md:px-8 px-4 
        md:py-11 py-8  lg:px-16 lg:py-14 '>
            <img src={group1 }
                 alt='group1'
                 className='lg:block hidden w-full h-auto '/>
            <img  src={mediumGroup1}
                  alt='mdiumGroup1'
                  className=' hidden md:block lg:hidden  w-full h-auto ' />
            <img src={smallGroup}
                 alt='smallGroup'
                 className='md:hidden block w-full h-auto' />
        </div>
    </section>
  )
}

export default Group
