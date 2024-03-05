import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';




function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
       
        <SwiperSlide><img className='w-full ' src='https://lds.com.np/wp-content/uploads/2023/09/Zenbook-Q410VA.jpg'/></SwiperSlide>
        <SwiperSlide><img className=' w-full' src='https://lds.com.np/wp-content/uploads/2023/09/Predator.jpg'/></SwiperSlide>
        <SwiperSlide><img className=' w-full' src='https://lds.com.np/wp-content/uploads/2023/11/B1400CBA-EK0127W.jpg'/></SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default Banner
