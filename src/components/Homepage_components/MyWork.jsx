import React from 'react'
import mongo from '../../assets/mongo.png'
import node from '../../assets/node.png'
import react from '../../assets/react.png'
import vue from '../../assets/vue.png'

const MyWork = () => {
  return (
    <>
     <div className='py-10 text-white bg-image4 bg-cover bg-center bg-blend-multiply bg-custom-bg3 mt-2 px-5'>
        <h1 className='underline font-extrabold text-3xl m-5 text-center font-montserrat'>My Work</h1>
        <p className='text-center font-normal mb-5 text-lg font-poppins'>Below is a selection of my range of work</p>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4'>
           <img src={mongo} alt="mongo db" className='h-44 rounded-lg w-64'/>
           <img src={node} alt="node db" className='h-44 rounded-lg w-64'/>
           <img src={react} alt="react db" className='h-44 rounded-lg w-64'/>
           <img src={vue} alt="vue db" className='h-44 rounded-lg w-64'/>
        </div>
     </div>
    </>
  )
}

export default MyWork