"use client";

import React from 'react'


const experiences = [
    {
        title: "Site Engineer",
        date: "2016 – 2018",
        description: "Vsk Builders",
    },
    {
        title: "Audit clerk and CNC Draftsman",
        date: "2018 – 2021",
        description: "SHIV SHAKTI ENTERPRISE SDN.BHD",
    },
    {
        title: "Social Media Marketer",
        date: "2023 - Mar - Aug",
        description: "Create Artist Studio",
    },
    {
        title:"Graphic Designer",
        date: "2023 - Sep - 2024 Present",
        description:"South wind Studios",
    },
];
const ExperiencePage = () => {
  return (
    <div className='p-10 bg-orange-200'>
        <div className='pb-10'>
            <h1 className='text-2xl font-bold text-center md:text-5xl md:text-left'>Experience</h1>
        </div>
        <div className="flex flex-col items-center justify-center p-10 bg-gray-100">
            {experiences.map((exp, index) => (
                <div key={index} className="flex items-start justify-center mb-10">
                    <div className="flex-shrink-0 w-4 h-4 mt-1 bg-blue-600 rounded-full"></div>
                    <div className="ml-4 text-center">
                        <h2 className="text-xl font-semibold">{exp.title}</h2>
                        <p className="text-gray-500">{exp.date}</p>
                        <p className="mt-1">{exp.description}</p>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default ExperiencePage