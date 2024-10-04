'use client';

import { reviewImages } from '@/public/images/reviewImages';

import React from 'react';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../reviews-swiper.css';

export default function SwiperReviews() {
  return (
    <div className="reviews">
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
        modules={[Autoplay, EffectCoverflow, Pagination]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {reviewImages.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              className="overflow-hidden rounded-xl"
              src={item}
              alt={`review-${index}`}
              width={200}
              height={200}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
