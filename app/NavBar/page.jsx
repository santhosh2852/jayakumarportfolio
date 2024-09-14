"use client";

import React from 'react';
import Link from "next/link";
import { useState } from 'react';
import HomePage from '../HomePage/page';
import ContactUs from '../ContactUs/page';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='block w-1/2 ml-auto mr-auto '>
      <div className='justify-start block gap-10 pt-5 m-0 text-center'>
        <div className='p-5 text-white bg-black rounded-lg'>
          <div className='flex items-center justify-center gap-20 text-xl'>
            <Link href='/'>Home</Link>
            <Link href='/ContactUs'>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar