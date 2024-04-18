'use client';

import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import Tab from './Tab';

const contentStyle = {
  height: '460px',
  zIndex: '200',
};

const Hero = () => {
  return (
    <div className='relative'>
      <Carousel autoplay>
        <div>
          <Image
            src='/img/images/GIH-service-website-04.jpg'
            width={1920}
            height={460}
            style={contentStyle}
          />
        </div>
        <div>
          <Image
            src='/img/images/Ambulance-service-scaled.jpg'
            width={1920}
            height={460}
            style={contentStyle}
          />
        </div>
        <div>
          <Image
            src='/img/images/GIH-service-website-03.jpg'
            width={1920}
            height={460}
            style={contentStyle}
          />
        </div>
        <div>
          <Image
            src='/img/images/GIH-service-website-02.jpg'
            width={1920}
            height={460}
            style={contentStyle}
          />
        </div>
        <div>
          <Image
            src='/img/images/Award-with-Acreedited.jpg'
            width={1920}
            height={460}
            style={contentStyle}
          />
        </div>
      </Carousel>

      {/* <div className='absolute -bottom-8 w-screen flex justify-center'>
        <Tab />
      </div> */}
    </div>
  );
};
export default Hero;
