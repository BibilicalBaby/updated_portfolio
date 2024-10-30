import React from 'react'

const WhatIDo = () => {
  return (
    <>
      <div className='my-3 bg-image2 bg-cover bg-fixed bg-center bg-custom-bg2 bg-blend-multiply text-white py-20'>
        <h1 className='text-3xl font-extrabold text-center sm:mb-14 mb-7 relative md:after:left-40 after:left-[38%]  after:w-32 after:block after:h-px after:w-3 after:bg-slate-400 after:absolute font-montserrat'>What I Do</h1>
        <div className='flex gap-3 align-center justify-evenly flex-col md:flex-row px-3'>
          <div className='md:bg-custom-color1 md:py-12 md:px-3 md:rounded-md'>
            <h2 className='text-center font-bold underline text-xl mb-3 font-montserrat'>Web App Development</h2>
            <p className='font-normal text-lg text-center font-roboto'>I develop robust web applications using modern technologies. From front-end interfaces with React to back-end services with Node.js, I ensure efficient and scalable solutions tailored to your needs.</p>
          </div>
          <div className='md:bg-custom-color1 md:py-12 md:px-3 md:rounded-md py-5'>
            <h2 className='text-center font-bold underline text-xl mb-3 font-montserrat'>Web Design</h2>
            <p className='font-normal text-lg text-center font-roboto'>I create visually appealing and intuitive designs that enhance user experience. My focus includes UI/UX design, responsive layouts, and interactive prototypes to ensure seamless interactions.</p>
          </div>
          <div className='md:bg-custom-color1 md:py-12 md:px-3 md:rounded-md py-5'>
            <h2 className='text-center font-bold underline text-xl mb-3 font-montserrat'>Hosting</h2>
            <p className='font-normal text-lg text-center font-roboto'>I offer reliable hosting solutions, including shared, dedicated, and cloud hosting. With continuous monitoring and support, your website remains fast, secure, and always accessible.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatIDo