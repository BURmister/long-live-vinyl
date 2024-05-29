import Link from 'next/link';
import { Links } from './links/Links';
import styles from './styles.module.scss';

export const Footer = () => {
   return (
      <footer className={`background-black ${styles.footer}`}>
         <div className={`content-wrapper ${styles.sitemap}`}>
            <Link href="/">
               <h2 className={`caption-24 font-bold text-white logo`}>
                  Long
                  <br />
                  Live
                  <br />
                  Vinyl
               </h2>
            </Link>
            <Links />
         </div>
         <div className={`background-white ${styles.line}`}></div>
         <div className={`content-wrapper ${styles.copy}`}>
            <p className="text-white text-16">© 2024 Long Live Vinyl, Inc. Graduation Project. All Rights Reserved.</p>
            <div className={`flex align-center ${styles.madeby}`}>
               <p className="block text-white text-16">Проект разработан: </p>
               <Link className="block text-white text-16 hover-underline" href="https://github.com/BURmister">
                  BURmister
               </Link>
            </div>
         </div>
      </footer>
   );
};
