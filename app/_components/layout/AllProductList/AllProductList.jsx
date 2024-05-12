'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useUpdateQueryParam } from '@/app/_hooks/useQueryParams';
import { useGetQuery } from '@/app/_hooks/useAxios';

import { ProductCard } from '../../ui/ProductCard/ProductCard';

import styles from './styles.module.scss';

export const AllProductList = ({ data, pagination, fetchUrl }) => {
   if (!data) return;

   // Render data
   const [productList, setProductList] = useState(data);
   // Pagination state
   const currentPage = useRef(Number(pagination.page));
   // For infinite scroll
   const { ref, inView } = useInView();

   // Work with url string && paste new pagination param
   // TODO: Фича клевая, но нужно проработать момент, когда пользак заходит на страницу уже с параметром не равным 1
   // const router = useRouter();
   // const pathname = usePathname();
   // const searchParams = useSearchParams();

   // fetch data
   const fetchData = async () => {
      const data = await useGetQuery(
         `http://87.242.117.166:1337/api/${fetchUrl}?pagination[page]=${currentPage.current + 1}&pagination[pageSize]=${pagination?.pageSize}`,
      );

      if (!data?.results || !data?.pagination) return;
      setProductList((prev) => [...prev, ...data.results]);
      currentPage.current += 1;
   };

   // Watch scroll to bottom element
   useEffect(() => {
      if (inView) fetchData();

      // Function to change || remove url param
      // TODO: Фича клевая, но нужно проработать момент, когда пользак заходит на страницу уже с параметром не равным 1
      // useUpdateQueryParam({ router, pathname, searchParams }, { name: 'page', value: currentPage.current, condition: 1 });
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
            {Number(pagination?.pageCount) > currentPage.current && (
               <p ref={ref} className="caption-32 text-center text-red">
                  Загрузка...
               </p>
            )}
         </section>
      </>
   );
};
