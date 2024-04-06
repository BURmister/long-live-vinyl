'use client';

import { useRouter } from 'next/navigation';
import styles from './styles.module.scss';

export const BackButton = () => {
   const router = useRouter();

   const handleClick = () => {
      if (navigation.canGoBack) router.back({ scroll: false });
      else router.push('/', { scroll: false });
   };

   return (
      <button type="button" className={`flex items-center justify-center ${styles.button}`} onClick={() => handleClick()}>
         <svg
            stroke="var(--black)"
            fill="var(--black)"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="24px"
            width="24px"
            xmlns="http://www.w3.org/2000/svg">
            <path fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="24" d="m268 112 144 144-144 144m124-144H100"></path>
         </svg>
         <p className="text-24">Назад</p>
      </button>
   );
};
