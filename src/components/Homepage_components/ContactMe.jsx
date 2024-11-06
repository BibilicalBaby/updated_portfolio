import React, { useState } from 'react'
import { toast } from 'react-toastify'

const ContactMe = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const fullMessage = {
    name,
    email,
    message
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Check if fullMessage has required fields
    if (!fullMessage || !fullMessage.name || !fullMessage.email || !fullMessage.message) {
        toast.error('Please fill in all required fields.')
        return
    }

    try {
        const response = await fetch('https://macboyportfolio.up.railway.app/sendmail', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fullMessage)
        })

        // Check for non-200 response status
        if (!response.ok) {
            toast.error('Problem sending email, please try again!')
            return
        }

        try {
            const data = await response.json()
            if (data && data.message) {
                toast.success('Email sent successfully!')
                setName('')
                setEmail('')
                setMessage('')
            } else {
                toast.error('Unexpected response from server.')
            }
        } catch (parseError) {
            toast.error('Error parsing response from server.')
            console.error('Parsing error:', parseError)
        }
        
    } catch (err) {
        toast.error(`Error: ${err.message}`)
        console.error('Network or server error:', err)
    }
}

  return (
    <>
      <div className='bg-image5 text-white  bg-blend-multiply bg-cover bg-custom-bg3 bg-center py-12 mt-3 px-3'>
        <button className='text-center py-3 sm:px-14 px-3 ml-[25%] rounded-md text-xl font-bold mb-7 bg-teal-500 w-1/2 font-montserrat'>Talk To Me</button>
        <p className='font-normal text-md text-center mb-7 font-roboto'>You can send me a message using the form below</p>
        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md  m-auto">
          <h2 className="text-xl font-bold mb-4 text-black font-lato">Send me a message</h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              className="w-full p-2 rounded bg-[rgba(3,160,181,0.41)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
              name='name'
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              className="w-full p-2 rounded bg-[rgba(3,160,181,0.41)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
              name='email'
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              value={message}
              className="w-full p-2 rounded bg-[rgba(3,160,181,0.41)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
              name='message'
              onChange={e => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
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