"use client";

import React from 'react';

const experiences = [
  {
    year: '2016 – 2018',
    title: 'Site Engineer',
    company: 'Vsk Builders',
    description: 'Worked on various social media posts, day wishes posts, and product posts. Gained experience in Adobe Photoshop, Illustrator, and Canva.'
  },
  {
    year: '2018 – 2021',
    title: 'Audit clerk and CNC Draftsman',
    company: 'SHIV SHAKTI ENTERPRISE SDN.BHD',
    description: 'Led design projects for multiple clients, creating high-quality designs that met their needs. Specialized in branding and marketing materials.'
  },
  {
    year: '2023 - Mar - Aug',
    title: 'Social Media Marketer',
    company: 'Create Artist Studio',
    description: 'Managed a team of designers and worked on large-scale projects. Focused on innovative design solutions and client satisfaction.'
  },
  {
    year: '2023 - Sep - 2024 Present',
    title: 'Graphic Designer',
    company: 'South wind Studios',
    description: 'Managed a team of designers and worked on large-scale projects. Focused on innovative design solutions and client satisfaction.'
  }
];

const ExperiencePage = () => {
  return (
    <div className="p-10">
        <div className=''>
            <h1 className='text-2xl font-bold text-center md:text-5xl md:text-left'>Experience</h1>
        </div>
        <div className='flex py-10 overflow-x-auto'>
            <div className="flex px-10 space-x-10">
                {experiences.map((experience, index) => (
                <div key={index} className="flex-shrink-0 p-5 bg-white rounded-lg shadow-lg w-80">
                    <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800">{experience.year}</h3>
                    <h4 className="text-lg font-semibold text-gray-600">{experience.title}</h4>
                    <p className="text-gray-500 text-md">{experience.company}</p>
                    <p className="mt-2 text-sm text-gray-400">{experience.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default ExperiencePage;
