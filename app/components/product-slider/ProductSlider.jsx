'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import styles from './styles.module.scss';

const PRODUCT_LIST = [
   {
      id: '_1323917',
      name: 'Savior | Green Day',
      img: 'https://media.pitchfork.com/photos/6537c158395c61f89c6689da/master/w_1280%2Cc_limit/Green-Day-Saviors.jpg',
   },
   {
      id: '_111102',
      name: 'Meds | Placebo',
      img: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c1/29/e2/c129e283-a76f-412f-8b6d-7738c9eada8f/5060186926872_1.jpg/1200x1200bf-60.jpg',
   },
   {
      id: '_1620752',
      name: 'Under My Skin | Avril Lavigne',
      img: 'https://i.discogs.com/W3AEHECTjt5z4sJh4daiiein66lXy5OYG_HOr9oxZeQ/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc3ODgx/OTUtMTQ0ODc5MzM0/Ny0zOTYyLmpwZWc.jpeg',
   },
   {
      id: '_1405892',
      name: 'Красота и Уродство | Oxxxymiron',
      img: 'https://upload.wikimedia.org/wikipedia/ru/a/a9/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%9A%D1%80%D0%B0%D1%81%D0%BE%D1%82%D0%B0_%D0%B8_%D1%83%D1%80%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE.jpg',
   },
];

export const ProductSlider = ({ sliderCaption, highlightCaption }) => {
   return (
      <section className={`flex flex-col ${styles.content}`}>
         <h2 className={`caption-32`}>
            {highlightCaption && <span className={`text-highlight`}>{highlightCaption + ' '}</span>}
            {sliderCaption}
         </h2>
         <div className={styles.slider}>
            <Swiper slidesPerView="auto">
               {PRODUCT_LIST &&
                  PRODUCT_LIST.map((item) => (
                     <SwiperSlide key={item.id} className={styles.slide}>
                        <div className={styles.card}>
                           <Link href="/">
                              <Image src={item.img} className={styles.img} width={512} height={512} alt={item.name} />
                           </Link>
                           <Link href="/">{item.name}</Link>
                           <div className={styles.catalogAction}>
                              <p className={styles.price}>23 000 $</p>
                              <button type="button" onClick={() => console.log('add to cart')}>
                                 Купить
                              </button>
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
                  </Link>
               </SwiperSlide>
            </Swiper>
         </div>
      </section>
   );
};
