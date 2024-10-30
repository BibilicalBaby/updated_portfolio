import React from 'react'

const ContactMe = () => {

  return (
    <>
      <div className='bg-image5 text-white  bg-blend-multiply bg-cover bg-custom-bg3 bg-center py-12 mt-3 px-3'>
        <button className='text-center py-3 px-14 ml-[25%] rounded-md text-xl font-bold mb-7 bg-teal-500 w-1/2 font-montserrat'>Talk To Me</button>
        <p className='font-normal text-md text-center mb-7 font-roboto'>You can send me a message using the form below</p>
        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md  m-auto">
          <h2 className="text-xl font-bold mb-4 text-black font-lato">Send me a message</h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded bg-[rgba(3,160,181,0.41)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded bg-[rgba(3,160,181,0.41)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-2 rounded bg-[rgba(3,160,181,0.41)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  )
}

export default ContactMe