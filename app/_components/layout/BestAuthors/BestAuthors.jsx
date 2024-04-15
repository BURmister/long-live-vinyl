import { Fragment } from 'react';
import { AuthorCardSpecial } from '../../ui/AuthorCard/AuthorCard';
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

export const BestAuthors = () => {
   return (
      <section className={`content-wrapper flex flex-col ${styles.wrapper}`}>
         <h2 className={`caption-32 title`}>
            <span className={`text-highlight`}>Бестселлеры</span>
         </h2>
         <div className={`${styles.content}`}>
            {BEST_AUTHORS.map((item, index) => (
               <Fragment key={index}>
                  <AuthorCardSpecial authorName={item.name} authorImage={item.img} authorSales={item.sales} place={index + 1} />
               </Fragment>
            ))}
            <AuthorCardSpecial cardLinkAll={true} />
         </div>
      </section>
   );
};
