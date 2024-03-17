'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import styles from './styles.module.scss';

export const ProductSlider = ({ sliderCaption, highlightCaption, data }) => {
   if (!data) return;

   return (
      <section className={`flex flex-col ${styles.content}`}>
         <h2 className={`caption-32`}>
            {highlightCaption && <span className={`text-highlight`}>{highlightCaption + ' '}</span>}
            {sliderCaption}
         </h2>
         <div className={styles.slider}>
            <Swiper slidesPerView="auto">
               {data.map((item) => (
                  <SwiperSlide key={item.id} className={styles.slide}>
                     <div className={styles.card}>
                        <Link href="/">
                           <Image src={item.img} className={styles.img} width={512} height={512} alt={item.name} />
                        </Link>
                        <div className={styles.content}>
                           <Link className={`caption-18 text-black ${styles.name}`} href="/">
                              {item.name}
                              <span className={`text-16 text-grey ${styles.name_author}`}>{item.author}</span>
                           </Link>
                           <div className={styles.catalogAction}>
                              <p className={styles.price}>23 000 $</p>
                              <button className={`hover-underline ${styles.btn_buy}`} type="button" onClick={() => console.log('add to cart')}>
                                 Купить
                              </button>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
               <SwiperSlide className={styles.slide}>
                  <Link className={styles.linkAll} href="/">
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
