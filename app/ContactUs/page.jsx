import React from 'react'
import NavBar from '../NavBar/page'
const ContactUs = () => {
  return (
    <div>
        <NavBar/>
        <div className="items-end justify-end block w-1/2 h-screen p-10 mt-auto ml-auto">
          <input required type="text" className="flex h-10 text-sm text-center text-black border-2 border-black rounded-md w-80" placeholder='Name'/>
          <input required type="text" className="flex h-10 text-sm text-center text-black border-2 border-black rounded-md gap-y-10 w-80" placeholder='Email'/>
          <textarea required className='flex h-40 pt-2 text-sm text-center text-black border-2 border-black rounded-md resize-none w-80' placeholder='Message'></textarea>
          <button className='flex items-center justify-center p-2 text-sm text-center border-2 border-black rounded-md'>Contact Me</button>
        </div>
    </div>
  )
}

export default ContactUs