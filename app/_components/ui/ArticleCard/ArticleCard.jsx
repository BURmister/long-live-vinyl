'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

export const ArticleCard = ({ article }) => {
   if (!article) return;

   return (
      <div className={styles.card}>
         <Link href={`/article/${article.id}`}>
            <Image src={article.img} className={styles.img} width={512} height={512} alt={article.title} />
         </Link>
         <div className={styles.content}>
            <div className={`flex flex-col ${styles.preview}`}>
               <Link className={`caption-24 text-normal w-fit hover-red text-black ${styles.title}`} href={`/article/${article.id}`}>
                  {article.title}
               </Link>
               <p className={`text-16 w-fit text-grey ${styles.text}`}>{article.text}</p>
            </div>
            <div className={styles.action}>
               <Link className={`text-20 w-fit hover-underline text-black`} href={`/article/${article.id}`}>
                  Читать
               </Link>
            </div>
         </div>
      </div>
   );
};
