import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// IMAGES
import HeroBg from '../../images/hero-bg.png'

import { Navigation, Autoplay} from 'swiper/modules';

const Hero = () => {
  return (
    <div className='hero-section'>
      <Swiper 
        loop={true} 
        navigation={false} 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]} 
        className="hero__swiper">
        <SwiperSlide>
          <img src={HeroBg} alt="swiper img" />
          <div className="hero__swiper-title">
            <h3><span>100%</span>Organic Vegetables</h3>
            <h1>The best way to stuff your wallet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HeroBg} alt="swiper img" />
          <div className="hero__swiper-title">
            <h3><span>100%</span>Organic Vegetables</h3>
            <h1>The best way to stuff your wallet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HeroBg} alt="swiper img" />
          <div className="hero__swiper-title">
            <h3><span>100%</span>Organic Vegetables</h3>
            <h1>The best way to stuff your wallet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
          </div>
        </SwiperSlide>  
      </Swiper>
    </div>
  )
}

export default Hero