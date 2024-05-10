'use client';

import { Fragment } from 'react';

import { ProductCard } from '../../ui/ProductCard/ProductCard';
import { WordLoading } from '../../ui/Loaders/WordLoading';

import styles from './styles.module.scss';

export const ProductList = ({ productList, pagination, currentPage, loaderRef }) => {
   if (!productList || !pagination) return console.warn('Prop "productList" && Prop "pagination" is required');

   return (
      <>
         <section className={`content-wrapper flex flex-col ${styles.listWrapper}`}>
            <div className={styles.productList}>
               {productList.map((item, index) => (
                  <Fragment key={index}>
                     <ProductCard product={item} />
                  </Fragment>
               ))}
            </div>
            {Number(pagination?.pageCount) > currentPage && <WordLoading loaderRef={loaderRef} />}
         </section>
      </>
   );
};
