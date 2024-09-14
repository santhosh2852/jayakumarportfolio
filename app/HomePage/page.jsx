"use client";

import React from 'react';
import NavBar from '../NavBar/page';
import ResumeButton from './ResumeButton';
import ServicePage from './ServicePage';
import Education from './Education';
import ProjectPage from './ProjectPage/ProjectPage';
import SkillsPage from './SkillsPage/SkillsPage';
const HomePage = () => {
  return (
    <div className="">
      <div className="p-10 m-0 select-none bg-violet-500">
        <NavBar/>
        <div className='pt-10 '>
          <h1 className='font-bold text-black text-7xl animate-jump'>Jaya Kumar</h1>
          <h2 className='pt-5 text-5xl font-medium text-transparent animate-jump bg-clip-text bg-gradient-to-r from-orange-600 via-orange-800 to-orange-900'>Graphic Designer</h2>
          <p className='flex w-1/2 pt-5 font-normal animate-jump'>I am a professional graphic designer with 7 months of experience in the industry. Specializing in specific areas like Social Media Post, Day Wishes post And Product post I have a proven track record of success in delivering highquality designs that meet clients' needs. With expertise in list specific skills like Adobe Photoshop, Illustrator, Canva, etc. I am dedicated to creating visually appealing and effective solutions for businesses. Passionate about design</p>
          <ResumeButton />
        </div>
      </div>
      <ServicePage/>
      <ProjectPage/>
      <Education/>
      <SkillsPage/>
    </div>
  )
}

export default HomePage