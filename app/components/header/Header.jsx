import Link from 'next/link';

import { Links } from '../links/Links';
import styles from './styles.module.scss';

export const Header = () => {
   return (
      <header className={styles.header}>
         <div className={`content-wrapper ${styles.header_container}`}>
            <Link href="/">
               <h2 className={`caption-24 font-bold ${styles.logo}`}>
                  Long
                  <br />
                  Live
                  <br />
                  Vinyl
               </h2>
            </Link>
            <Links />
         </div>
      </header>
   );
};
