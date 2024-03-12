'use client';
import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export const Slider = ({ data, lastSlideLink, lastSlideHref, children, CardComponent }) => {
   return (
      <Swiper slidesPerView="auto">
         {
            data ? () => {
               return (
                  <>
                     {
                        data.map((item) => (
                           <SwiperSlide key={item.id} className={styles.other_banner}>
                              <Link href="/">
                                 <Image src={item.img} width={512} height={512} alt="" />
                              </Link>
                           </SwiperSlide>
                        ))
                     }
                     <SwiperSlide className={styles.other_banner}>
                        <Link href="/">
                           <svg
                              stroke="var(--red)"
                              fill="var(--red)"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="200px"
                              width="200px"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="24" d="m268 112 144 144-144 144m124-144H100"></path>
                           </svg>
                        </Link>
                     </SwiperSlide>
                  </>
               )
            } : ''
         }
         {SALE_LIST &&
            }
         
      </Swiper>
   );
}