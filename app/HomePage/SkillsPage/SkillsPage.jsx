"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SkillsPage = () => {
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className='p-10 '>
        <div className=''>
            <h1 className='text-5xl font-bold'>SERVICE</h1>
        </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>Creativity in design</SwiperSlide>
        <SwiperSlide>Typography knowledge</SwiperSlide>
        <SwiperSlide>Specializing in Social media post</SwiperSlide>
        <SwiperSlide>Keep up with latest trends in Graphic Design field</SwiperSlide>
        <SwiperSlide>Observation</SwiperSlide>
        <SwiperSlide>Canva</SwiperSlide>
        <SwiperSlide>Communication</SwiperSlide>
        <SwiperSlide>Decision making</SwiperSlide>
        <SwiperSlide>Adobe Photoshop</SwiperSlide>
        <SwiperSlide>Adobe Illustrator Basic</SwiperSlide>        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  )
}

export default SkillsPage