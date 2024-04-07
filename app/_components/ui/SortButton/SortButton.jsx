'use client';

import { useEffect, useState } from 'react';

import { SquareIconButton } from '../Button/Button';
import { Window } from '../Window/Window';

import styles from './styles.module.scss';

export const SortButton = () => {
   const [openWindow, setOpenWindow] = useState(true);
   const handleClick = () => {
      setOpenWindow((prev) => !prev);
   };

   useEffect(() => console.log('SortButton: ', openWindow), [openWindow]);

   return (
      <div className={`relative`}>
         <SquareIconButton
            icon={
               <svg stroke="var(--black)" fill="var(--black)" strokeWidth="0" viewBox="0 0 256 256" height="48px" width="48px">
                  <path d="M209.15,60.17l-80-24A4,4,0,0,0,124,40V158.75A44,44,0,1,0,132,184V93.38l74.85,22.45A4,4,0,0,0,212,112V64A4,4,0,0,0,209.15,60.17ZM88,220a36,36,0,1,1,36-36A36,36,0,0,1,88,220ZM204,106.62,132,85V45.38L204,67Z"></path>
               </svg>
            }
            title={'Сортировка'}
            onClick={() => handleClick()}
         />
         <Window headerTitle={'Сортировка'} openWindow={openWindow}>
            <div>сортировка | контент</div>
         </Window>
      </div>
   );
};
