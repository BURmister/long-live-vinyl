import { Fragment } from 'react';
import { AuthorCardSpecial } from '../../ui/AuthorCard/AuthorCard';
import { fetchGetQuery } from '@/app/_hooks/useAxios';
import styles from './styles.module.scss';

const BEST_AUTHORS = [
   {
      name: 'The Beatles',
      sales: '98 956',
      img: 'https://ospioresdiscosdomundo.files.wordpress.com/2019/02/maxresdefault-1.jpg?w=840',
   },
   {
      name: 'Nirvana',
      sales: '82 769',
      img: 'https://static.wikia.nocookie.net/nirvana/images/6/6e/Nirvana.jpg/revision/latest?cb=20191009094152',
   },
   {
      name: 'Linkin Park',
      sales: '64 023',
      img: 'https://lostmediawiki.com/w/images/f/f4/LinkinPark.jpg',
   },
];

export const BestAuthors = async () => {
   const BEST_AUTHORS = await fetchGetQuery('https://api.longlivevinyl.ru/api/authors/?sort=place:asc&pagination[pageSize]=3');
   if (!BEST_AUTHORS || !BEST_AUTHORS.results) return;

   return (
      <section className={`content-wrapper flex flex-col ${styles.wrapper}`}>
         <h2 className={`caption-32 title`}>
            <span className={`text-highlight`}>Бестселлеры</span>
         </h2>
         <div className={`${styles.content}`}>
            {BEST_AUTHORS.results?.map((item, index) => (
               <Fragment key={index}>
                  <AuthorCardSpecial author={item} />
               </Fragment>
            ))}
            <AuthorCardSpecial cardLinkAll={true} />
         </div>
      </section>
   );
};
