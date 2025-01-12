"use client";

import React from 'react';
import Image from 'next/image';
import Behance from '../../public/SocialMedia/Behance.png';
import Facebook from '../../public/SocialMedia/Facebook.png';
import Instagram from '../../public/SocialMedia/Instagram.png';
import LinkedIn from '../../public/SocialMedia/LinkedIn.png';
import Twitter from '../../public/SocialMedia/Twitter.png';

const FooterBar = () => {
  return (
    <div className='bottom-0 w-full p-5 bg-white'>
      <div className='flex justify-center mt-auto mb-auto space-x-6'>
        <a href='https://www.behance.net/jayakumar94' target='_blank'>
          <Image
            src={Behance}
            width={55}
            height={55}
            alt='Behance image'
          />
        </a>
        <a href='https://www.facebook.com/manojai1994' target='_blank'>
          <Image
            src={Facebook}
            width={50}
            height={50}
            alt='Facebook image'
          />
        </a>
        <a href='https://www.instagram.com/manojai_jk/' target='_blank'>
          <Image
            src={Instagram}
            width={50}
            height={50}
            alt='Instagram image'
          />
        </a>
        <a href='http://linkedin.com/in/jaya-kumar-817098114' target='_blank'>
          <Image
            src={LinkedIn}
            width={50}
            height={50}
            alt='LinkedIn image'
          />
        </a>
        <a href='https://twitter.com/manojai1994' target='_blank'>
          <Image
            src={Twitter}
            width={50}
            height={50}
            alt='Twitter image'
          />
        </a>
      </div>
    </div>
  )
}

export default FooterBar;