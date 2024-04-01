'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useUpdateQueryParam } from '@/app/_hooks/useQueryParams';

import { ProductCard } from '../../ui/ProductCard/ProductCard';
import styles from './styles.module.scss';

const PRODUCT_LIST = [
   {
      id: '_1323917',
      name: 'Saviors - 2024',
      author: 'Green Day',
      img: 'https://media.pitchfork.com/photos/6537c158395c61f89c6689da/master/w_1280%2Cc_limit/Green-Day-Saviors.jpg',
   },
   {
      id: '_111102',
      name: 'Meds - 2016',
      author: 'Placebo',
      img: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c1/29/e2/c129e283-a76f-412f-8b6d-7738c9eada8f/5060186926872_1.jpg/1200x1200bf-60.jpg',
   },
   {
      id: '_1620752',
      name: 'Under My Skin - 2008',
      author: 'Avril Lavigne',
      img: 'https://i.discogs.com/W3AEHECTjt5z4sJh4daiiein66lXy5OYG_HOr9oxZeQ/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc3ODgx/OTUtMTQ0ODc5MzM0/Ny0zOTYyLmpwZWc.jpeg',
   },
   {
      id: '_1405892',
      name: 'Красота и Уродство - 2022',
      author: 'Oxxxymiron',
      img: 'https://upload.wikimedia.org/wikipedia/ru/a/a9/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%9A%D1%80%D0%B0%D1%81%D0%BE%D1%82%D0%B0_%D0%B8_%D1%83%D1%80%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE.jpg',
   },
   {
      id: '_14000712',
      name: 'Death of a Bachelor - 2016',
      author: 'Panic! At the Disco',
      img: 'https://m.media-amazon.com/images/I/81VelaE+aFL._UF1000,1000_QL80_.jpg',
   },
   {
      id: '_13239967',
      name: 'Saviors - 2024',
      author: 'Green Day',
      img: 'https://media.pitchfork.com/photos/6537c158395c61f89c6689da/master/w_1280%2Cc_limit/Green-Day-Saviors.jpg',
   },
   {
      id: '_14525255592',
      name: 'The Black Parade - 2008',
      author: 'My Chemical Romance',
      img: 'https://m.media-amazon.com/images/I/51hk8tpIEKL._UF1000,1000_QL80_.jpg',
   },
   {
      id: '_16672892',
      name: 'The Rising Tied - 2016',
      author: 'Fort Minor',
      img: 'https://i.discogs.com/QAut2YiNNUTLJIDFZQRCYh4-KjN82hVL5SMxpglC0Lk/rs:fit/g:sm/q:90/h:561/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0Mzk5/MDMtMTM3MjA2NzQw/MS01MTkxLmpwZWc.jpeg',
   },
   {
      id: '_1400071245',
      name: 'Death of a Bachelor - 2016',
      author: 'Panic! At the Disco',
      img: 'https://m.media-amazon.com/images/I/81VelaE+aFL._UF1000,1000_QL80_.jpg',
   },
   {
      id: '_1323216917',
      name: 'Saviors - 2024',
      author: 'Green Day',
      img: 'https://media.pitchfork.com/photos/6537c158395c61f89c6689da/master/w_1280%2Cc_limit/Green-Day-Saviors.jpg',
   },
   {
      id: '_1323917',
      name: 'Saviors - 2024',
      author: 'Green Day',
      img: 'https://media.pitchfork.com/photos/6537c158395c61f89c6689da/master/w_1280%2Cc_limit/Green-Day-Saviors.jpg',
   },
   {
      id: '_111102',
      name: 'Meds - 2016',
      author: 'Placebo',
      img: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c1/29/e2/c129e283-a76f-412f-8b6d-7738c9eada8f/5060186926872_1.jpg/1200x1200bf-60.jpg',
   },
   {
      id: '_1620752',
      name: 'Under My Skin - 2008',
      author: 'Avril Lavigne',
      img: 'https://i.discogs.com/W3AEHECTjt5z4sJh4daiiein66lXy5OYG_HOr9oxZeQ/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc3ODgx/OTUtMTQ0ODc5MzM0/Ny0zOTYyLmpwZWc.jpeg',
   },
   {
      id: '_1405892',
      name: 'Красота и Уродство - 2022',
      author: 'Oxxxymiron',
      img: 'https://upload.wikimedia.org/wikipedia/ru/a/a9/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%9A%D1%80%D0%B0%D1%81%D0%BE%D1%82%D0%B0_%D0%B8_%D1%83%D1%80%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE.jpg',
   },
   {
      id: '_14000712',
      name: 'Death of a Bachelor - 2016',
      author: 'Panic! At the Disco',
      img: 'https://m.media-amazon.com/images/I/81VelaE+aFL._UF1000,1000_QL80_.jpg',
   },
   {
      id: '_13239967',
      name: 'Saviors - 2024',
      author: 'Green Day',
      img: 'https://media.pitchfork.com/photos/6537c158395c61f89c6689da/master/w_1280%2Cc_limit/Green-Day-Saviors.jpg',
   },
   {
      id: '_14525255592',
      name: 'The Black Parade - 2008',
      author: 'My Chemical Romance',
      img: 'https://m.media-amazon.com/images/I/51hk8tpIEKL._UF1000,1000_QL80_.jpg',
   },
   {
      id: '_16672892',
      name: 'The Rising Tied - 2016',
      author: 'Fort Minor',
      img: 'https://i.discogs.com/QAut2YiNNUTLJIDFZQRCYh4-KjN82hVL5SMxpglC0Lk/rs:fit/g:sm/q:90/h:561/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0Mzk5/MDMtMTM3MjA2NzQw/MS01MTkxLmpwZWc.jpeg',
   },
   {
      id: '_1400071245',
      name: 'Death of a Bachelor - 2016',
      author: 'Panic! At the Disco',
      img: 'https://m.media-amazon.com/images/I/81VelaE+aFL._UF1000,1000_QL80_.jpg',
   },
   {
      id: '_1323216917',
      name: 'Saviors - 2024',
      author: 'Green Day',
      img: 'https://media.pitchfork.com/photos/6537c158395c61f89c6689da/master/w_1280%2Cc_limit/Green-Day-Saviors.jpg',
   },
];

export const ProductList = () => {
   // Render data
   const [productList, setProductList] = useState(PRODUCT_LIST);
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
         setProductList((prev) => [...prev, ...PRODUCT_LIST]);
         pagination.current += 1;
      }

      // Function to change || remove url param
      useUpdateQueryParam({ router, pathname, searchParams }, { name: 'page', value: pagination.current, condition: 1 });
   }, [inView]);

   return (
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
   );
};
