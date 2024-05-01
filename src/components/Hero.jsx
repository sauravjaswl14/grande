'use client';

import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import Tab from './Tab';

const contentStyle = {
  height: '460px',
  zIndex: '200',
};

let imgSrcData = [
  '/img/images/GIH-service-website-04.jpg',
  '/img/images/Ambulance-service-scaled.jpg',
  '/img/images/GIH-service-website-03.jpg',
  '/img/images/GIH-service-website-02.jpg',
  '/img/images/Award-with-Acreedited.jpg',
];

const Hero = ({ imgSrcData }) => {
  return (
    <div className='relative'>
      <Carousel autoplay>
        {imgSrcData.map((imgSrc, idx) => {
          return (
            <div key={idx}>
              <Image
                src={imgSrc}
                width={1920}
                height={460}
                style={contentStyle}
                alt='hero images'
              />
            </div>
          );
        })}
        {/* <div>
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
        </div> */}
      </Carousel>

      {/* <div className='absolute -bottom-8 w-screen flex justify-center'>
        <Tab />
      </div> */}
    </div>
  );
};
export default Hero;
