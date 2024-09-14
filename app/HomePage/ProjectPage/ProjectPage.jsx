"use client";

import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Image1 from '../../../public/ProjectPageImage/Image1.jpg';
import Image2 from '../../../public/ProjectPageImage/Image2.jpg';
import Image3 from '../../../public/ProjectPageImage/Image3.jpg';
import Image4 from '../../../public/ProjectPageImage/Image4.jpg';
import Image5 from '../../../public/ProjectPageImage/Image5.png';
import Image6 from '../../../public/ProjectPageImage/Image6.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const ProjectPage = () => {
  return (
    <div className='p-10 bg-orange-200'>
    <div>
      <h1 className='text-5xl font-bold'>PROJECT</h1>
    </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={Image1}
            alt='Image 1'
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Image2}
            alt='Image 2'
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Image3}
            alt='Image 3'
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Image4}
            alt='Image 4'
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Image5}
            alt='Image 5'
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Image6}
            alt='Image 6'
            width={500}
            height={500}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProjectPage