import { SectionArticles } from '../SectionArticles';
import { BackButton } from '@/app/_components/ui/BackButton/BackButton';
import { StickyLine } from '@/app/_components/ui/StickyLine/StickyLine';
import { SearchBar } from '@/app/_components/ui/SearchBar/SearchBar';
import styles from './styles.module.scss';
import { EmptySearch } from '@/app/_components/layout/EmptySection/EmptySection';
import { Suspense } from 'react';

export const metadata = {
   title: 'Журнал Long Live Vinyl',
   description: 'Погрузись в прекрасный мир музыки с лучшим журналом про винил | Long Live Vinyl',
};

const ARTICLE_LIST = [
   {
      id: '_21315',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
   {
      id: '_1312312',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
   {
      id: '_9716',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
   {
      id: '_1405892',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
   {
      id: '_14000712',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
   {
      id: '_13239967',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
   {
      id: '_14525255592',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
   {
      id: '_16672892',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
   {
      id: '_1400071245',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
   {
      id: '_1323216917',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
   {
      id: '_1323917',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
   {
      id: '_111102',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
   {
      id: '_1620752',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'Avril Lavigne',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
   {
      id: '_1405892',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
   {
      id: '_14000712',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
   {
      id: '_13239967',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
   {
      id: '_14525255592',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
   {
      id: '_16672892',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
   {
      id: '_1400071245',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
   {
      id: '_1323216917',
      title: 'Самый ценный винил в мире – часть 3',
      text: 'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
      img: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   },
];

export default function MagazineSection({ params, searchParams }) {
   return (
      <div className={`page-wrapper flex flex-col ${styles.wrapper}`}>
         <h1 className="content-wrapper caption-32 title">
            Ищем: <span className="text-red">{searchParams.q ? searchParams.q : 'Ничего не ищем'}</span>
         </h1>
         {searchParams.q ? (
            <SectionArticles _q={searchParams.q} />
         ) : (
            <>
               <StickyLine>
                  <BackButton />
                  <Suspense>
                     <SearchBar
                        icon={
                           <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" x="0" y="0" viewBox="0 0 60.02 60.02">
                              <g>
                                 <path
                                    d="m59.766 15.896-.363-.386h-1.837l.409-3.34a1.51 1.51 0 0 0-1.502-1.66h-2.437V7c0-.821-.669-1.49-1.491-1.49h-2.509V2c0-.821-.669-1.49-1.491-1.49H11.526c-.821 0-1.49.669-1.49 1.49v3.51h-2.51c-.821 0-1.49.669-1.49 1.49v3.51H3.599c-.426 0-.834.182-1.12.497a1.519 1.519 0 0 0-.379 1.185l.406 3.318h-1.37c-.321 0-.623.141-.83.386l-.306.41 5.959 41.856a1.629 1.629 0 0 0 1.605 1.348h44.942c.791 0 1.467-.565 1.611-1.38l5.886-41.352a1.075 1.075 0 0 0-.237-.882zM12.036 2.51h36v3h-36v-3zm-4 5h44v3h-44v-3zm-3.883 5h51.765l-.367 3H4.521l-.368-3zm48.034 45H7.886l-5.695-40H57.88l-5.693 40z"
                                    fill="var(--black)"></path>
                                 <path
                                    d="M29.536 20.51c-11.304 0-20.5 7.626-20.5 17s9.196 17 20.5 17 20.5-7.626 20.5-17-9.196-17-20.5-17zm0 32c-10.201 0-18.5-6.729-18.5-15s8.299-15 18.5-15 18.5 6.729 18.5 15-8.299 15-18.5 15z"
                                    fill="var(--black)"></path>
                                 <path
                                    d="M30.536 25.449a1 1 0 0 0-1-1c-3.993 0-7.778 1.21-10.946 3.499a1 1 0 0 0 1.172 1.621c2.824-2.041 6.204-3.12 9.774-3.12a1 1 0 0 0 1-1zM30.536 29.2a1 1 0 0 0-1-1c-3.105 0-6.049.941-8.512 2.723a1 1 0 0 0 1.172 1.621c2.12-1.533 4.658-2.344 7.34-2.344a1 1 0 0 0 1-1zM30.536 32.95a1 1 0 0 0-1-1c-2.229 0-4.339.68-6.104 1.967a.998.998 0 1 0 1.178 1.615c1.42-1.035 3.124-1.582 4.926-1.582a1 1 0 0 0 1-1zM39.4 45.638c-2.824 2.042-6.204 3.121-9.774 3.121a1 1 0 1 0 0 2c3.994 0 7.779-1.21 10.946-3.5a1 1 0 0 0-1.172-1.621zM28.626 46.008a1 1 0 0 0 1 1c3.106 0 6.05-.942 8.512-2.724a1 1 0 0 0-1.171-1.621c-2.119 1.534-4.657 2.345-7.34 2.345a1 1 0 0 0-1.001 1zM28.626 42.257a1 1 0 0 0 1 1c2.23 0 4.341-.68 6.104-1.967a1 1 0 0 0-1.179-1.615c-1.418 1.035-3.121 1.582-4.925 1.582a1 1 0 0 0-1 1z"
                                    fill="var(--black)"></path>
                                 <ellipse cx="29.932" cy="37.494" rx="2.327" ry="1.689" fill="var(--black)"></ellipse>
                              </g>
                           </svg>
                        }
                        placeholder={'Друг, винил возьмешь?'}
                     />
                  </Suspense>
               </StickyLine>
               <EmptySearch title={'Так мы точно ничего не найдем :('} msg={'Попробуйте: лучшая в мире статья про винил'} />
            </>
         )}
      </div>
   );
}
