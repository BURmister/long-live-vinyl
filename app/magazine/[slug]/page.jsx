import { notFound } from 'next/navigation';
import { SectionArticles } from '../SectionArticles';
import { useGetQuery } from '@/app/_hooks/useAxios';

import styles from './styles.module.scss';

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

export default async function MagazineSection({ params }) {
   const SECTION_DATA = await useGetQuery('http://localhost:1337/api/magazine-section/' + params.slug);
   if (!SECTION_DATA || !SECTION_DATA.data) return notFound();

   return (
      <div className={`page-wrapper flex flex-col ${styles.wrapper}`}>
         <h1 className="content-wrapper caption-32 title">{SECTION_DATA.data?.attributes?.name}</h1>
         <SectionArticles sectionSlug={params.slug} />
      </div>
   );
}
