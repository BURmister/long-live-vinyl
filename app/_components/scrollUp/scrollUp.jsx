'use client';
import { useState, useEffect } from 'react';

import styles from './styles.module.scss';

export const ScrollUp = () => {
   const [visible, setVisible] = useState(false);

   const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > window.innerHeight) setVisible(true);
      else setVisible(false);
   };

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   };

   useEffect(() => window.addEventListener('scroll', toggleVisible), []);

   return (
      <div className={styles.wrapper}>
         <button className={`${styles.button} ${visible && styles.visible}`} type="button" onClick={() => scrollToTop()}>
            <svg
               stroke="var(--red)"
               fill="var(--red)"
               strokeWidth="0"
               viewBox="0 0 512 512"
               height="32px"
               width="32px"
               xmlns="http://www.w3.org/2000/svg">
               <path fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="24" d="m268 112 144 144-144 144m124-144H100"></path>
            </svg>
         </button>
      </div>
   );
};
