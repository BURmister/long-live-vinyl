'use client';

import { Fragment } from 'react';
import { WordLoading } from '../../ui/Loaders/WordLoading';
import { ArticleCard } from '../../ui/ArticleCard/ArticleCard';

import styles from './styles.module.scss';

export const ArticleList = ({ articleList, pagination, currentPage, loaderRef }) => {
   if (!articleList || !pagination) return console.warn('Prop "articleList" && Prop "pagination" is required');

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
            {Number(pagination?.pageCount) > currentPage && <WordLoading loaderRef={loaderRef} />}
         </section>
      </>
   );
};
