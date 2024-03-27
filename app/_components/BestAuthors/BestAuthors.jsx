import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

const BEST_AUTHORS = [
   {
      name: 'The Beatles',
      sales: '98 956',
      img: 'https://ospioresdiscosdomundo.files.wordpress.com/2019/02/maxresdefault-1.jpg?w=840',
   },
   {
      name: 'Nirvana',
      sales: '82 769',
      img: 'https://static.wikia.nocookie.net/nirvana/images/6/6e/Nirvana.jpg/revision/latest?cb=20191009094152',
   },
   {
      name: 'Linkin Park',
      sales: '64 023',
      img: 'https://lostmediawiki.com/w/images/f/f4/LinkinPark.jpg',
   },
];

export const BestAuthors = () => {
   return (
      <section className={`flex flex-col ${styles.wrapper}`}>
         <h2 className={`caption-32`}>
            <span className={`text-highlight`}>Бестселлеры</span>
         </h2>
         <div className={`${styles.content}`}>
            {BEST_AUTHORS.map((item, index) => (
               <Link key={index} className={`flex background-black ${styles.author}`} href="/">
                  <Image src={item.img} className={styles.img} width={512} height={512} alt={item.name} />
                  <span className={styles.overlay}></span>
                  <span className={`flex flex-col ${styles.authorDesc}`}>
                     <p className={`caption-32`}>{item.name}</p>
                     <p className={`caption-24 flex items-center`}>
                        {item.sales + ' '}
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
                     </p>
                  </span>
                  <p className={`text-88 italic ${index === 0 && 'text-red'} ${styles.authorPlace}`}>{index + 1}</p>
               </Link>
            ))}
            <Link className={`${styles.linkAll}`} href="/">
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
         </div>
      </section>
   );
};
