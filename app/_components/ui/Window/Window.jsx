'use client';
import { useState, useEffect } from 'react';
import { SquareIconButton } from '../Button/Button';

import styles from './styles.module.scss';

export const Window = () => {
   const [open, setOpen] = useState(true);

   const handleToggle = () => {
      setOpen((prev) => !prev);
   };
   const handleClose = () => setOpen(false);

   useEffect(() => console.log('window: ', open), [open]);

   return (
      <div className={`relative`}>
         <SquareIconButton
            icon={
               <svg stroke="var(--black)" fill="var(--black)" strokeWidth="0" viewBox="0 0 256 256" height="48px" width="48px">
                  <path d="M209.15,60.17l-80-24A4,4,0,0,0,124,40V158.75A44,44,0,1,0,132,184V93.38l74.85,22.45A4,4,0,0,0,212,112V64A4,4,0,0,0,209.15,60.17ZM88,220a36,36,0,1,1,36-36A36,36,0,0,1,88,220ZM204,106.62,132,85V45.38L204,67Z"></path>
               </svg>
            }
            title={'Сортировка'}
            onClick={() => handleToggle()}
         />
         <div className={`${styles.window} ${open ? styles.open : ''}`}>
            <div className={styles.overlay}></div>
            <div className={styles.wrapper}>
               <div className={styles.header}>
                  <span></span>
                  <h2 className="caption-24">Сортировка</h2>
                  <button type="button" className={`caption-24 ${styles.closeButton}`} onClick={() => handleClose()}>
                     X
                  </button>
               </div>
               <div className={styles.content}>
                  <div>сортировка | контент</div>
               </div>
            </div>
         </div>
      </div>
   );
};
