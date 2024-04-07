'use client';
import { useEffect, useState, useRef } from 'react';
import { SquareIconButton } from '../Button/Button';

import styles from './styles.module.scss';

export const Window = ({ children, title, buttonIcon, rightStyle = false }) => {
   const [open, setOpen] = useState(false);
   const windowRef = useRef(null);

   const handleToggle = () => setOpen((prev) => !prev);
   const handleClose = () => setOpen(false);
   const handleClickOutside = (event) => {
      if (windowRef.current && !windowRef.current.contains(event.target)) handleClose();
   };

   useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
         // Unbind the event listener on clean up
         document.removeEventListener('click', handleClickOutside);
      };
   }, [windowRef]);

   return (
      <div ref={windowRef} className={`relative`}>
         <SquareIconButton icon={buttonIcon} title={title} onClick={() => handleToggle()} />
         <div className={`${styles.wrapper} ${open ? styles.open : ''} ${rightStyle && styles.rightStyle}`}>
            <div className={styles.overlay} onClick={() => handleClose()}></div>
            <div className={styles.windowWrapper}>
               <div className={`flex flex-col ${styles.window}`}>
                  <div className={styles.header}>
                     <span className="invisible">X</span>
                     <h2 className="caption-24">{title}</h2>
                     <button type="button" className={`caption-24 ${styles.closeButton}`} onClick={() => handleClose()}>
                        X
                     </button>
                  </div>
                  <div className={styles.content}>{children}</div>
               </div>
            </div>
         </div>
      </div>
   );
};
