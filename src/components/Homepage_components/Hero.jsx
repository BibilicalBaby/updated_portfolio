import React, { useEffect, useState } from 'react'
import myImage from '../../assets/profile_img.jpg'

const Hero = () => {
  // CALCULATING MY AGE
  const [age, setAge] = useState('')
  useEffect(() => {
    const calculateYears = (date) => {
      const today = new Date();
      const startDate = new Date(date);
      
      let years = today.getFullYear() - startDate.getFullYear();
      
      // Adjust if the current date is before the anniversary this year
      if (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate())) {
          years--;
      }
      return years

    }
    setAge(calculateYears('2003-10-04'))
    
    
  }, [])
  
  return (
    <>
        <div className='md:flex md:flex-row items-center justify-center md:gap-10 gap-4 pb-16 pt-16 md:pt-24 relative flex flex-col'>
            <p className='text-lg md:-mt-20' > <span className='text-black font-bold'>Hi, I'm</span> <br />  <span className='text-green-600 font-sniglet font-normal text-xl'>Muthusi💙</span>, <br /><span className="text-blue-700 font-poppins">{age} years of age.</span> </p>
            <img src={myImage} alt="profile image" className='lg:size-64 size-44 md:rounded-full rounded-md'/>
            <p className='md:absolute md:bottom-24 md:left-2/5 p-3 bg-blue-900 w-3/4 sm:w-3/5 text-left md:-z-50 text-white font-bold sm:text-lg rounded-md font-montserrat shadow-md shadow-gray-400 md:translate-x-[-8%] lg:translate-x-0'>A Full Stack Web Developer</p>
        </div>
    </>
  )

}

export default Hero