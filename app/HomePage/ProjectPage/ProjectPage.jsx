"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Image1 from '../../../public/ProjectPageImage/Image1.jpg';
import Image2 from '../../../public/ProjectPageImage/Image2.jpg';
import Image3 from '../../../public/ProjectPageImage/Image3.jpg';
import Image4 from '../../../public/ProjectPageImage/Image4.jpg';
import Image5 from '../../../public/ProjectPageImage/Image5.jpg';
import Image6 from '../../../public/ProjectPageImage/Image6.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const ProjectPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

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
        {[Image1, Image2, Image3, Image4, Image5, Image6].map((image, index) => (
          <SwiperSlide key={index} onClick={() => openModal(image)}>
            <div className="relative w-full h-64">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={closeModal}>
          <div className="relative w-3/4 h-3/4">
            <Image
              src={selectedImage}
              alt="Selected Image"
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectPage;