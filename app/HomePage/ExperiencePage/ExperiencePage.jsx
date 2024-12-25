"use client";

import React from 'react';

const experiences = [
  {
    year: '2016 – 2018',
    title: 'Site Engineer',
    company: 'Vsk Builders',
    description: 'A Site Engineer is responsible for overseeing construction projects, ensuring technical accuracy, managing on-site operations, and ensuring safety and compliance with design specifications'
  },
  {
    year: '2018 – 2021',
    title: 'Audit clerk and CNC Draftsman',
    company: 'SHIV SHAKTI ENTERPRISE SDN.BHD',
    description: 'An Audit Clerk reviews financial records for accuracy, while a CNC Draftsman creates technical drawings for CNC machine operations'
  },
  {
    year: '2023 - Mar - Aug',
    title: 'Social Media Marketer',
    company: 'Create Artist Studio',
    description: 'A Social Media Marketer develops and executes strategies to promote brands, engage audiences, and drive traffic through social media platforms'
  },
  {
    year: '2023 - Sep - 2024 Present',
    title: 'Graphic Designer',
    company: 'South wind Studios',
    description: 'A Graphic Designer creates visual concepts, designs, and layouts for print and digital media to communicate ideas and messages effectively'
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
