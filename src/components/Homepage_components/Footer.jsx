import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTelegram, FaTradeFederation, FaTrademark, FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  // CALCULATING THE CURRENT YEAR
  const currentYear = new Date().getFullYear()
  return (
    <>
      <div className='mt-0.5 bg-black flex items-center justify-center flex-col py-7'>
        <h2 className='text-emerald-400 py-5 font-sniglet'>Hello &copy;Muthusi&trade;</h2>
        <div className='flex items-center justify-center gap-5 pt-2 pb-7 text-blue-700 text-lg'>
            <a href="https://www.facebook.com/joel.muthusi.52" title='my Facebook'><FaFacebook /></a>
            <a href="https://twitter.com/Mac_boy734" title='check me on X'><FaXTwitter /></a>
            <a href="https://github.com/MacBoy734" title='check my github'><FaGithub /></a>
            <a href="https://www.instagram.com/muthusijoel/" title='check me on insta'><FaInstagram /></a>
            <a href="https://t.me/Macboy_734" title='reach me via Telegram'><FaTelegram /></a>
            <a href="https://wa.me/254790450348" title='chat me on Whatsapp'><FaWhatsapp /></a>
        </div>
        <h2 className='text-white font-lato'>&copy;Muthusi&trade;  {currentYear}. All rights reserved.</h2>
      </div>
    </>
  )
}

export default Footer