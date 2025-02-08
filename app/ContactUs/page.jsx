"use client";

import React,{ useRef } from 'react'
import NavBar from '../NavBar/page'
import Image from 'next/image';
// import Mano from './../../public/ProjectPageImage/manoj.jpg'
import emailjs from '@emailjs/browser';
import Manoj from '@/public/ProjectPageImage/manoj.png';
const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hwrbjwn', 'template_ea1jdn8', form.current, {
        publicKey: 'bP6YC_l57ulsC9wY9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          var email = document.getElementById('email');
          var name = document.getElementById('name');
          var Message=document.getElementById('Message');
          email.value = '';
          name.value = '';
          Message.value = '';
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  
  return (
    // <div className='block w-screen min-h-screen p-10 m-0 ml-auto mr-auto overflow-x-hidden bg-gray-100'>
      // <NavBar/>
    <div className='w-screen min-h-screen p-10 m-0 bg-gray-100'>
        <NavBar/>
{/*         
        <Image className='pt-5 md:pt-0'
        src={Mano}
        alt='JayaKumar'
        height={200}
        width={200}
        
        /> */}
        <Image
          src={Manoj}
          alt='Manoj'
          width={300}
          height={300}
          className='pt-32 ml-auto mr-auto md:float-left md:pt-32 '
          />
        <div className="flex items-center pt-10 md:fixed md:-translate-y-1/2 md:transform md:w-1/2 md:flex-col md:flex md:right-0 md:top-1/2 justify-evenly">
        <form ref={form} onSubmit={sendEmail}>
              <input id='name'
                required 
                type="text" 
                className="flex h-10 mb-4 text-sm text-center text-black border-2 border-black rounded-md w-80" 
                placeholder='Name' 
              />
              <input id='email'
                required 
                type="text" 
                className="flex h-10 mb-4 text-sm text-center text-black border-2 border-black rounded-md w-80" 
                placeholder='Email' 
              />
              <textarea 
                required id='Message'
                className='flex h-40 pt-2 mb-4 text-sm text-center text-black border-2 border-black rounded-md resize-none w-80' 
                placeholder='Message'
              ></textarea>
              <button className='flex items-center justify-center p-2 text-sm text-center bg-white border-2 border-black rounded-md'>Contact Me</button>
          </form>
      </div>
    </div>
    // </div>
  )
}

export default ContactUs