// "use client";

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// const SkillsPage = () => {
//     const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty('--progress', 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 3000)}s`;
//   };
//   return (
//     <div className='p-10 '>
//         {/* <div className=''>
//             <h1 className='text-2xl font-bold text-center md:text-5xl md:text-left'>SKILLS</h1>
//         </div>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 10000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         loop={true}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//         className="mySwiper"
//       >
//         <SwiperSlide>Creativity in design</SwiperSlide>
//         <SwiperSlide>Typography knowledge</SwiperSlide>
//         <SwiperSlide>Specializing in Social media post</SwiperSlide>
//         <SwiperSlide>Keep up with latest trends in Graphic Design field</SwiperSlide>
//         <SwiperSlide>Observation</SwiperSlide>
//         <SwiperSlide>Canva</SwiperSlide>
//         <SwiperSlide>Communication</SwiperSlide>
//         <SwiperSlide>Decision making</SwiperSlide>
//         <SwiperSlide>Adobe Photoshop</SwiperSlide>
//         <SwiperSlide>Adobe Illustrator Basic</SwiperSlide>        
//         <div className="autoplay-progress" slot="container-end">
//           <svg viewBox="0 0 48 48" ref={progressCircle}>
//             <circle cx="24" cy="24" r="20"></circle>
//           </svg>
//           <span ref={progressContent}></span>
//         </div>
//       </Swiper> */}

//       <div>
//         <p>Content</p>
//       </div>
//     </div>
//   )
// }

// export default SkillsPage

"use client";

import React from 'react';
import Image from 'next/image';
import ps from '../../../public/ProjectPageImage/ps.png';
import illu from '../../../public/ProjectPageImage/illu.png';
import pp from '../../../public/ProjectPageImage/pp.png';

import './styles.css';

const skills = [
  { name: 'Social Media Poster', level: '90%' },
  { name: 'A4 Poster Design', level: '80%' },
  { name: 'Phamphlet Design', level: '80%' },
  { name: 'Visiting Card', level: '90%' },
  { name: 'Invitation', level: '70%' },
];

const SkillsPage = () => {
  return (
    <div className='min-h-screen p-10 bg-gray-100'>
      <div className='mb-10'>
        <h1 className='text-2xl font-bold text-center md:text-5xl md:text-left'>Content</h1>
      </div>
      <div className='space-y-6'>
        {skills.map((skill, index) => (
          <div key={index} className='w-full'>
            <div className='flex justify-between mb-1'>
              <span className='text-lg font-medium text-gray-800'>{skill.name}</span>
              <span className='text-lg font-medium text-gray-800'>{skill.level}</span>
            </div>
            <div className='w-full h-4 bg-gray-300 rounded-full'>
              <div className='h-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500' style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-10'>
        <h1 className='ml-auto mr-auto text-2xl font-bold text-center md:text-5xl'>Tools</h1>
      </div>
      <div className='md:flex md:justify-center md:gap-5'>
      <Image
        src={ps}
        alt='Photoshop'
        width={100}
        height={100}
        className='pt-5 ml-auto mr-auto md:pt-11'
      /><br/>
      <Image
        src={illu}
        alt='Illustrator'
        width={100}
        height={100}
        className='ml-auto mr-auto md:pt-11'
      />
      <Image
        src={pp}
        alt='Premiere Pro'
        width={100}
        height={100}
        className='pt-5 ml-auto mr-auto md:pt-11'
      />
    </div>
    </div>
  );
}

export default SkillsPage;