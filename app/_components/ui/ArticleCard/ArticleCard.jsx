'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

export const ArticleCard = ({ article }) => {
   if (!article) return;

   return (
      <div className={styles.card}>
         <Link href={`/article/${article.slug}`}>
            <Image
               src={article.previewImage && article.previewImage.url ? 'http://95.174.93.98:1337' + article.previewImage.url : article.img}
               className={styles.img}
               width={512}
               height={512}
               alt={article.name}
            />
         </Link>
         <div className={styles.content}>
            <div className={`flex flex-col ${styles.preview}`}>
               <Link className={`caption-24 text-normal w-fit hover-red text-black ${styles.title}`} href={`/article/${article.slug}`}>
                  {article.name}
               </Link>
               <p className={`text-16 w-fit text-grey ${styles.text}`}>{article.previewText}</p>
            </div>
            <div className={styles.action}>
               <Link className={`text-20 w-fit hover-underline text-black`} href={`/article/${article.slug}`}>
                  Читать
               </Link>
            </div>
         </div>
      </div>
   );
};
