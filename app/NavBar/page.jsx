"use client";

import React from 'react';
import Link from "next/link";
import { useState } from 'react';
import HomePage from '../HomePage/page';
import ContactUs from '../ContactUs/page';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='fixed z-50 pt-5 transform -translate-x-1/2 bg-black bg-opacity-75 rounded-lg md:w-1/2 backdrop-blur-md left-1/2'>
      <div className='gap-10 pt-2 pb-2 pl-2 pr-2 m-0 text-center'>
        <div className='p-5 text-white rounded-lg'>
          <div className='flex items-center justify-center gap-20 text-xl'>
            <Link className='hover:text-red-500' href='/'>Home</Link>
            <Link className='hover:text-red-500' href='/ContactUs'>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar




// <nav className='mr-auto md:w-1/2 md:ml-auto md:block'>
// <div className='justify-start block gap-10 pt-5 m-0 text-center'>
//   <div className='p-5 text-white bg-black rounded-lg'>
//     <div className='flex items-center justify-center gap-20 text-xl'>
//       <Link href='/'>Home</Link>
//       <Link href='/ContactUs'>Contact</Link>
//     </div>
//   </div>
// </div>
// </nav>