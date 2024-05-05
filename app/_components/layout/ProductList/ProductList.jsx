'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useUpdateQueryParam } from '@/app/_hooks/useQueryParams';
import { useGetQuery } from '@/app/_hooks/useAxios';

import { ProductCard } from '../../ui/ProductCard/ProductCard';

import styles from './styles.module.scss';

export const ProductList = ({ data, sectionSlug }) => {
   // Render data
   const [productList, setProductList] = useState(data);
   // Pagination state
   const pagination = useRef(1);
   // For infinite scroll
   const { ref, inView } = useInView();

   // Work with url string && paste new pagination param
   const router = useRouter();
   const pathname = usePathname();
   const searchParams = useSearchParams();

   // useEffect(() => {
   //    if (sectionSlug) {
   //       const data = useGetQuery('http://localhost:1337/category/slug')
   //    }
   // }, [])

   // Watch scroll to bottom element
   useEffect(() => {
      if (inView) {
         setProductList((prev) => [...prev, ...data]);
         pagination.current += 1;
      }

      // Function to change || remove url param
      useUpdateQueryParam({ router, pathname, searchParams }, { name: 'page', value: pagination.current, condition: 1 });
   }, [inView]);

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
            <p ref={ref} className="caption-32 text-center text-red">
               Загрузка...
            </p>
         </section>
      </>
   );
};
