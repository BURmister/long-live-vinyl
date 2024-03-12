'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import styles from './styles.module.scss';

const PRODUCT_LIST = [
   {
      id: '_1312',
      name: 'Meteora | Linkin Park',
      img: 'https://i.discogs.com/NO2k3uFzpDfPGVw0etRMuKlK0hIW_5IB91KvBllBn9Q/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkzNjk3/Ny0xNjA1Mzg4NTY4/LTMyMTMuanBlZw.jpeg',
   },
   {
      id: '_141212',
      name: 'A Place For Us To Dream | Placebo',
      img: 'https://m.media-amazon.com/images/I/61w3KNzb4+L._UF1000,1000_QL80_.jpg',
   },
   {
      id: '_13412',
      name: 'Brand New Eyes | Paramore',
      img: 'https://music-ark.ru/upload/iblock/75e/75e9db113e0e1a4df75c746506ce83c8.jpg',
   },
   {
      id: '_136812',
      name: 'Hot Fuss | The Killers',
      img: 'https://www.pult.ru/upload/iblock/8cf/8cf3a0f8dc655ffcf4f62c1022811ab9.jpg',
   },
];

export const ProductSlider = ({ sliderCaption, highlightCaption }) => {
   return (
      <section>
         <h2 className={`caption-32`}>
            {highlightCaption && <span className={`text-highlight`}>{highlightCaption + ' '}</span>}
            {sliderCaption}
         </h2>
         <div>
            <Swiper slidesPerView="auto">
               {PRODUCT_LIST &&
                  PRODUCT_LIST.map((item) => (
                     <SwiperSlide key={item.id} className={styles.slide}>
                        <div className={styles.card}>
                           <Link href="/">
                              <Image src={item.img} width={512} height={512} alt={item.name} />
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
                  <Link href="/">
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
