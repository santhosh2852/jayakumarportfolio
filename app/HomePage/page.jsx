"use client";

import React from 'react';
import NavBar from '../NavBar/page';
import ResumeButton from './ResumeButton';
import ServicePage from './ServicePage';
import Education from './Education';
import ProjectPage from './ProjectPage/ProjectPage';
import SkillsPage from './SkillsPage/SkillsPage';
import ExperiencePage from './ExperiencePage/ExperiencePage';
import FooterBar from '../FooterBar/page';
import Image from 'next/image';
import Manoj from '@/public/ProjectPageImage/manoj.png';
import TypingText from './TypingText';

const HomePage = () => { 
  return (
    <div className="">
      
      <div className="p-10 m-0 text-center bg-gray-100 select-none md:text-left">
        <NavBar/>
        <div className="p-0 pt-32 m-0 text-center bg-gray-100 select-none md:p-32 md:text-left">
        <Image
          src={Manoj}
          alt='Manoj'
          width={300}
          height={300}
          className='ml-auto mr-auto md:float-right md:pt-11'
          />
        <div className='pt-10'>
          <h1 className='text-5xl font-bold text-black md:text-7xl animate-jump'>Jaya Kumar</h1>
          <TypingText/>
          {/* <h2 className='pt-5 pr-2 text-4xl font-medium text-red-500 md:text-5xl animate-jump' style={{ fontFamily: 'Anton, sans-serif' }}>Graphic Designer</h2> */}
          <p className='pt-5 text-center text-black md:w-1/2 md:flex md:font-normal animate-jump md:text-left'>I am a professional graphic designer with 1 year of experience in the industry. Specializing in specific areas like Social Media Post, Day Wishes post And Product post I have a proven track record of success in delivering highquality designs that meet clients' needs. With expertise in list specific skills like Adobe Photoshop, Illustrator, Canva, etc. I am dedicated to creating visually appealing and effective solutions for businesses. Passionate about design</p>
          <ResumeButton />
          
        </div>
        </div>
      </div>
      {/* <ServicePage/> */}
      <ProjectPage/>
      <Education/>
      <SkillsPage/>
      <ExperiencePage/>
      <FooterBar/>

      
    </div>
  )
}

export default HomePage