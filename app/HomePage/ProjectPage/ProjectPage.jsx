"use client";

import React from 'react';
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
        <h1 className='text-2xl font-bold text-center md:text-5xl md:text-left'>PROJECT</h1>
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
          <div className="relative w-full h-64">
            <Image
              src={Image1}
              alt='Image 1'
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-64">
            <Image
              src={Image2}
              alt='Image 2'
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-64">
            <Image
              src={Image3}
              alt='Image 3'
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-64">
            <Image
              src={Image4}
              alt='Image 4'
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-64">
            <Image
              src={Image5}
              alt='Image 5'
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-64">
            <Image
              src={Image6}
              alt='Image 6'
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProjectPage;