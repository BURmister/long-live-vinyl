'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Links } from './links/Links';
import styles from './styles.module.scss';

export const Header = () => {
   const [whiteLogo, setWhiteLogo] = useState(false);

   return (
      <header className={styles.header}>
         <div className={`content-wrapper ${styles.header_container}`}>
            <Link href="/" className={`${styles.logo} ${whiteLogo && styles.whiteLogo}`}>
               <h2 className={`caption-24 font-bold logo ${whiteLogo && 'text-white'}`}>
                  Long
                  <br />
                  Live
                  <br />
                  Vinyl
               </h2>
            </Link>
            <Links setWhiteLogo={() => setWhiteLogo((prev) => !prev)} />
         </div>
      </header>
   );
};
