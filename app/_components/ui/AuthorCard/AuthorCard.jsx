import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

export const AuthorCardSpecial = ({ authorName, authorImage, authorSales, auhtorListening, place, link = '/', largeCard = false, cardLinkAll = false }) => {
   if (cardLinkAll)
      return (
         <Link className={`${styles.linkAll} ${styles.card}`} href="/">
            <svg
               stroke="var(--red)"
               fill="var(--red)"
               strokeWidth="0"
               viewBox="0 0 512 512"
               height="140px"
               width="140px"
               xmlns="http://www.w3.org/2000/svg">
               <path fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="24" d="m268 112 144 144-144 144m124-144H100"></path>
            </svg>
         </Link>
      );

   return (
      <Link className={`flex background-black ${styles.author} ${styles.card} ${largeCard && styles.largeCard}`} href={link}>
         <Image src={authorImage} className={styles.img} width={512} height={512} alt={authorName} />
         <span className={styles.overlay}></span>
         <span className={`flex flex-col ${styles.authorDesc}`}>
            <p className={`caption-32`}>{authorName}</p>
            <p className={`caption-24 flex items-center`}>
               {authorSales ? authorSales + '\u00A0' : auhtorListening + '\u00A0'}
               {authorSales ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                        fill="var(--black)"
                     />
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                        fill="var(--black)"
                     />
                  </svg>
               ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
                        fill="var(--black)"
                     />
                  </svg>
               )}
            </p>
         </span>
         <p className={`text-88 italic ${String(place) === '1' && 'text-red'} ${styles.authorPlace}`}>{place}</p>
      </Link>
   );
};
