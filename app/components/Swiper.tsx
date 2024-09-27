'use client';

// import '@/app/swiper.css';
import { ReactNode } from 'react';

import { register } from 'swiper/element/bundle';

register();

export default function Swiper({
  children,
  initialSlide = 0,
}: {
  children: ReactNode;
  initialSlide?: number;
}) {
  // const progressCircle = document.querySelector('.autoplay-progress svg');
  // const progressContent = document.querySelector('.autoplay-progress span');

  // const swiperEl = document.querySelector('swiper-container');
  // swiperEl.addEventListener('autoplaytimeleft', (e) => {
  //   const [swiper, time, progress] = e.detail;
  //   progressCircle.style.setProperty('--progress', 1 - progress);
  //   progressContent.textContent = `${Math.ceil(time / 1000)}s`;
  // });

  return (
    <swiper-container
      slides-per-view="auto"
      centered-slides="true"
      navigation={true}
      pagination={true}
      pagination-dynamic-bullets={true}
      grab-cursor={true}
      effect="coverflow"
      coverflow-effect-rotate="50"
      coverflow-effect-stretch="0"
      coverflow-effect-depth="100"
      coverflow-effect-modifier="1"
      coverflow-effect-slide-shadows="true"
      initial-slide={initialSlide}
    >
      {children}
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span></span>
      </div>
    </swiper-container>
  );
}
