import Image from 'next/image'
import React from 'react'

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
        <Image src='/Avatar.png' width={737} height={678} alt='' className='translate-z-0 w-full h-full scale-[0.7]'/>
    </div>
  )
}

export default Avatar