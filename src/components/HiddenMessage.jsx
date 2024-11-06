import React from 'react'
import { BiSolidMessageRoundedDots } from "react-icons/bi"
import { SiGooglemessages } from "react-icons/si"

const HiddenMessage = ({ isRight }) => {
    return (
        <>
            {isRight ? (
                <div className={`flex gap-5 items-center justify-center bg-emerald-500 px-3 py-7 rounded-lg text-white `}>
                    <BiSolidMessageRoundedDots className='translate-x-[-130%] text-3xl h-24 pl-2 bg-emerald-500 font-extrabold' />
                    <div>
                        <h2 className='font-normal text-lg py-2 text-center font-montserrat'>I develop web apps professionaly.</h2>
                        <h3 className='font-normal text-lg py-2 font-sniglet'>hire me and get your dream web app a reality in the browser TODAY!</h3>
                        <h4 className='font-normal text-lg py-2 font-merriweather'>let the online presence of your business be felt!</h4>
                    </div>
                </div>) :
                (<div className={`flex gap-5 items-center justify-center bg-sky-500 px-3 py-7 rounded-lg text-white`}>
                    <div>
                        <h2 className='font-normal text-lg py-2 text-center font-montserrat'>I develop web apps professionaly.</h2>
                        <h3 className='font-normal text-lg py-2 font-sniglet'>Your business needs to be known! Am here for you.</h3>
                        <h4 className='font-normal text-lg py-2 font-poppins'>build a strong online presence, show your business to the world.</h4>
                    </div>
                    <SiGooglemessages className='translate-x-[130%] text-3xl text-black font-extrabold h-24 pr-2  bg-sky-500' />
                </div>
            )}
        </>
    )
}

export default HiddenMessage