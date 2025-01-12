"use client";

import React from 'react';

const experiences = [
  {
    year: '2012',
    title: 'School',
    company: 'MRR MAVMM MAT HR SEC SCHOOL',
    description: 'A school is an educational institution designed to provide learning spaces and learning environments for the teaching of students under the direction of teachers. Most countries have systems of formal education, which is sometimes compulsory.'
  },
  {
    year: '2016',
    title: 'College',
    company: 'SACS MAVMM ENGINEERING COLLEGE',
    description: 'Civil Engineering is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewerage systems, pipelines, structural components of buildings, and railways.'
  }
];

const ExperiencePage = () => {
  return (
    <div className="justify-center p-10 ml-auto mr-auto text-center">
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
