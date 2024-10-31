import React from 'react'
import old_image from '../../assets/image_1.jpeg'

const HireMe = () => {
  return (
    <>
      <div className='flex  items-center justify-center py-10 gap-5 sm:gap-1 relative flex-col sm:flex-row sm:px-10'>
        <h1 className='bg-red-800 text-black p-5 sm:absolute w-[80%] sm:w-[90%] lg:w-[80%] sm:translate-x-10 rounded-lg sm:-z-50 top-16 font-bold text-xl font-montserrat'>HIRE ME</h1>
        <p className='text-red-900 text-md font-bold sm:-mb-20 md:-mb-1 font-lato'>You can hire me to turn your dream web projects into <br />reality online at anytime <br /> If you want to get in touch, hit me up</p>
        <img src={old_image} alt="my image" className='md:size-70 size-64 rounded-md'/>
      </div>
    </>
  )
}

export default HireMe