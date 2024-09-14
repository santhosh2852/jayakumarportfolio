"use client";

import React from 'react'
import NavBar from '../NavBar/page'
const ContactUs = () => {
  return (
    <div className='min-h-screen p-10 m-0 min-w-max bg-blue-950'>
        <NavBar/>
        <div className="fixed right-0 flex flex-col items-center justify-center w-1/2 h-screen p-10 transform -translate-y-1/2 top-1/2">
              <input 
                required 
                type="text" 
                className="flex h-10 mb-4 text-sm text-center text-black border-2 border-black rounded-md w-80" 
                placeholder='Name' 
              />
              <input 
                required 
                type="text" 
                className="flex h-10 mb-4 text-sm text-center text-black border-2 border-black rounded-md w-80" 
                placeholder='Email' 
              />
              <textarea 
                required 
                className='flex h-40 pt-2 mb-4 text-sm text-center text-black border-2 border-black rounded-md resize-none w-80' 
                placeholder='Message'
              ></textarea>
              <button className='flex items-center justify-center p-2 text-sm text-center bg-white border-2 border-white rounded-md'>Contact Me</button>
      </div>
    </div>
  )
}

export default ContactUs