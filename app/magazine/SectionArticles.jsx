'use client';
import { Fragment, Suspense, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// import { usePathname, useRouter, useSearchParams } from 'next/navigation';
// import { useUpdateQueryParam } from '@/app/_hooks/useQueryParams';
import { fetchGetQuery } from '@/app/_hooks/useAxios';

import { StickyLine } from '@/app/_components/ui/StickyLine/StickyLine';
import { SearchBar } from '@/app/_components/ui/SearchBar/SearchBar';
import { BackButton } from '@/app/_components/ui/BackButton/BackButton';
import { ArticleList } from '../_components/layout/ArticleList/ArticleList';
import { EmptySearch, EmptySection } from '../_components/layout/EmptySection/EmptySection';
import { WordLoading } from '../_components/ui/Loaders/WordLoading';

const ITEMS_ON_PAGE = 5;
const ARTICLES_API_PATH = 'magazine-articles/';

export const SectionArticles = ({ sectionSlug, _q }) => {
   if (sectionSlug) _q = null;
   // if (!sectionSlug && !_q) return console.warn('u need implement one of those props: "sectionSlug" || "_q"');

   // Render data
   const [articleList, setArticleList] = useState([]);
   // Sort state
   const [sort, setSort] = useState();
   // Filter state
   const [filter, setFilter] = useState();
   // Pagination state
   const [pagination, setPagination] = useState(null);
   const currentPage = useRef(0);
   // Infinite scroll
   const { ref, inView } = useInView();

   // Work with url string && paste new pagination param
   // TODO: Фича клевая, но нужно проработать момент, когда пользак заходит на страницу уже с параметром не равным 1
   // const router = useRouter();
   // const pathname = usePathname();
   // const searchParams = useSearchParams();

   // fetch data
   const loading = useRef(false);
   const fetchData = async () => {
      if (loading.current) return;

      loading.current = true;
      const data = await fetchGetQuery(
         'https://api.longlivevinyl.ru/api/' +
            ARTICLES_API_PATH +
            `?${sectionSlug ? 'filters[magazineSections][slug]=' + sectionSlug : ''}${_q ? '_q=' + _q : ''}&pagination[page]=${
               currentPage.current + 1
            }&pagination[pageSize]=${ITEMS_ON_PAGE}`,
      );

      if (!data || !data.results || !data.pagination || data.results?.length === 0) return setArticleList(null);
      setArticleList((prev) => [...prev, ...data.results]);
      setPagination(data.pagination);
      currentPage.current += 1;

      loading.current = false;
   };

   // First component render
   const firstComponentRender = useRef(true);
   // Watch scroll to bottom element
   useEffect(() => {
      if (firstComponentRender.current) {
         fetchData();
         firstComponentRender.current = false;
      }
      if (inView) fetchData();

      // Function to change || remove url param
      // TODO: Фича клевая, но нужно проработать момент, когда пользак заходит на страницу уже с параметром не равным 1
      // useUpdateQueryParam({ router, pathname, searchParams }, { name: 'page', value: currentPage.current, condition: 1 });
   }, [inView]);

   return (
      <>
         <StickyLine>
            <BackButton />
            <Suspense>
               <SearchBar
                  icon={
                     <svg className="nn-svg" width="64px" height="64px" fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 750">
                        <path d="M593.99,360.97c-2.48-10.26-2.87-26.72-6.74-40.05,6.16-7.83-1.12-16.44-5.28-23.41-9.95-17.48-20.79-34.65-33.99-49.86-12.63-14.88-29.97-24.42-45.51-35.87-13.07-10.7-25.18-22.57-38.65-32.8-20.51-19.67-53.74,.22-46.64,27.47,6.26,30.59,33.43,23.73,23.35-4.47,12.29-3.72,37.1,24.82,48.44,31.88,32.25,21.9,54.48,37.62,74.42,66.58-12.82-.3-25.79,.41-38.61-.62-29.82-.91-61.43-4.55-90.07,5.41-17.18,5.97-13.25,21.92-14.25,36.05-13.19,.21-26.97,.86-39.82-2.5-2.68-20.94-11.5-23.71-30.66-19.93-13.43,.95-26.88,1.61-40.34,1.79-25.08,.42-50.15-1.09-75.22-1.13,12.2-13.72,25.05-26.89,37.87-40,16.22-15.06,35.5-26.42,51.1-42.14,8.02-7.98,14.21-17.52,21.64-26.01,5.73-1.04,10.43,5.76,12.5,10.47,1.93,4.76,3.49,9.68,4.98,14.59,5.43,13.31,18.82,1.69,14.42-8.81-4.48-17.08-15.29-41.79-36.7-38.41-6.92,2-10.93,8.55-15.67,13.49-6.95,8.3-15.19,15.29-23.89,21.67-15.99,11.23-81.54,63.24-101.88,98.69-12.98,4.08-21.75,12.25-11.16,27.61,11.11,27.68,15.21,90.95,45.87,101.67,30.97,1.55,61.66-5.76,92.57-6.92,43.01-1.6,60.12,4.2,50.51-47.51,18.66-.38,37.37-1.63,55.97,.48,3.41,12.78,6.15,28.84,17.91,36.62,8.82,3.4,18.69-.61,27.84-.85,18.04-1.91,36.28-1.87,54.4-1.64,77.33,7.06,73.19,.62,61.3-71.51Zm-91.79,51.52c-7.05,.53-46.19,9.51-47.59,3.9-9.44-30.97,0-45.76-40.99-48.06-43.29-4-69.17-10.5-61.83,45.2-32.1,3.91-62.47,15.3-94.21,20.65-8.92-.29-22.74,5.7-27.5-4.71-10.22-24.97-7.55-53.32-15.4-79.07,49.17-3,98.96,1.67,147.78-5.76,4.14,23.24,31.99,16.12,49.15,17.71,19.72,3.76,27.33-11.68,27.54-28.97,42.38,1.04,84.75,.33,127.01-3.8,2.28,23.51,1.46,47.24,4.56,70.7-22.91,3.75-45.83,7.19-68.52,12.2Z" />
                        <path d="M177.03,459.36c-5.95,.63-11.9,1.25-17.86,1.88-11.4,2.82-12.75,20.57-4.55,27.59,7.48,5.18,17.37,.2,25.8,.39,12-.52,29.26-2.86,26.84-18.9-1.23-15.92-19.1-12.29-30.23-10.95Z" />
                        <path d="M249.03,541.66c-2.38-10.03-1.13-30.25-15.64-29.61-14.5,4.92-7.91,24.19-6.89,35.49,2.39,9.52,.46,21.52,7.88,28.91,9.62,8.1,19.75-5.37,17.62-14.92-.99-6.62-1.98-13.25-2.98-19.87Z" />
                        <path d="M342.91,492.05c-13.13-4.86-26.25-9.73-39.38-14.58-9.6-3.63-22.43-7.52-25.19,6.18-6.73,23.3,42.25,28.85,57.9,37.49,15.9,4.62,20.35-23.97,6.67-29.09Z" />
                     </svg>
                  }
                  placeholder={'Найди ту самую...'}
                  action={'/magazine/search'}
               />
            </Suspense>
         </StickyLine>
         {!articleList ? (
            !_q ? (
               <EmptySection title="Уже работаем над новыми статьями =)" />
            ) : (
               <EmptySearch title="Попробуйте: лучшая в мире статья про винил" />
            )
         ) : articleList.length > 0 && pagination ? (
            <ArticleList articleList={articleList} pagination={pagination} currentPage={currentPage.current} loaderRef={ref} />
         ) : (
            <WordLoading />
         )}
      </>
   );
};
