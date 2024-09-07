"use client";

import React from 'react';
import Link from "next/link";
import { useState } from 'react';
import HomePage from '../HomePage/page';
import ContactUs from '../ContactUs/page';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='w-1/2 ml-auto mr-auto block'>
      <div className='block text-center m-0 justify-start gap-10 pt-5'>
        <div className='text-white bg-black p-5 rounded-lg'>
          <div className='items-center justify-center flex gap-20 text-xl'>
            <Link href='/'>Home</Link>
            <Link href='/ContactUs'>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar