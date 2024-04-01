'use client';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { ProductCard } from '../../ui/ProductCard/ProductCard';
import styles from './styles.module.scss';

export const ProductSlider = ({ sliderCaption, highlightCaption, data }) => {
   if (!data) return;

   return (
      <section className={`flex flex-col ${styles.content}`}>
         <div className="content-wrapper">
            <Link className="block w-fit" href="/">
               <h2 className={`caption-32 title`}>
                  {highlightCaption && <span className={`text-highlight`}>{highlightCaption + ' '}</span>}
                  {sliderCaption}
               </h2>
            </Link>
         </div>
         <div className={`content-wrapper slider-wrapper ${styles.slider}`}>
            <Swiper slidesPerView="auto">
               {data.map((item) => (
                  <SwiperSlide key={item.id} className={styles.slide}>
                     <ProductCard product={item} />
                  </SwiperSlide>
               ))}
               <SwiperSlide className={styles.slide}>
                  <Link className={`hover-translation ${styles.linkAll}`} href="/">
                     <svg
                        stroke="var(--red)"
                        fill="var(--red)"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="200px"
                        width="200px"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           fill="none"
                           strokeLinecap="square"
                           strokeMiterlimit="10"
                           strokeWidth="24"
                           d="m268 112 144 144-144 144m124-144H100"></path>
                     </svg>
                     {/* <span className="overlay-wrap">
                        <span className="overlay"></span>
                     </span> */}
                  </Link>
               </SwiperSlide>
            </Swiper>
         </div>
      </section>
   );
};
