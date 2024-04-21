'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useUpdateQueryParam } from '@/app/_hooks/useQueryParams';

import { ArticleCard } from '../../ui/ArticleCard/ArticleCard';

import styles from './styles.module.scss';

export const ArticleList = ({ data }) => {
   // Render data
   const [articleList, setArticleList] = useState(data);
   // Pagination state
   const pagination = useRef(1);
   // For infinite scroll
   const { ref, inView } = useInView();

   // Work with url string && paste new pagination param
   const router = useRouter();
   const pathname = usePathname();
   const searchParams = useSearchParams();

   // Watch scroll to bottom element
   useEffect(() => {
      if (inView) {
         setArticleList((prev) => [...prev, ...data]);
         pagination.current += 1;
      }

      // Function to change || remove url param
      useUpdateQueryParam({ router, pathname, searchParams }, { name: 'page', value: pagination.current, condition: 1 });
   }, [inView]);

   return (
      <>
         <section className={`content-wrapper flex flex-col ${styles.listWrapper}`}>
            <div className={styles.articleList}>
               {articleList.map((item, index) => (
                  <Fragment key={index}>
                     <ArticleCard article={item} />
                  </Fragment>
               ))}
            </div>
            <p ref={ref} className="caption-32 text-center text-red">
               Загрузка...
            </p>
         </section>
      </>
   );
};
