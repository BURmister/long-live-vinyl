import Image from 'next/image';

import { StickyLine } from '@/app/_components/ui/StickyLine/StickyLine';
import { SearchBar } from '@/app/_components/ui/SearchBar/SearchBar';
import { AuthorCardSpecial } from '@/app/_components/ui/AuthorCard/AuthorCard';
import { SeoBlock } from '@/app/_components/layout/SeoBlock/SeoBlock';
import { fetchGetQuery } from '@/app/_hooks/useAxios';

import styles from './styles.module.scss';
import { Suspense } from 'react';

export const metadata = {
   title: 'Исполнители Long Live Vinyl',
   description: 'Музыкальные исполнители, группы, авторы, кумиры и легенды | Long Live Vinyl',
};

// const TREND_AUTHORS = [
//    {
//       name: 'Taylor Swift',
//       sales: '688 632 895',
//       link: '/authors/paramore',
//       img: 'https://i.pinimg.com/736x/ae/c8/3c/aec83cde59d1173ce1975b904c535796.jpg',
//    },
//    {
//       name: 'Eminem',
//       sales: '642 702 196',
//       link: '/authors/paramore',
//       img: 'https://i.pinimg.com/564x/6d/90/4e/6d904e70c16ef968dcb1c9a2a7d58f98.jpg',
//    },
//    {
//       name: 'Ed Sheeran',
//       sales: '596 434 289',
//       link: '/authors/paramore',
//       img: 'https://i.pinimg.com/564x/4b/7b/c9/4b7bc96c63cb960f1ae5eaac08cec28f.jpg',
//    },
// ];

export default async function Authors() {
   const BEST_AUTHORS = await fetchGetQuery('http://https://api.longlivevinyl.ru/api/authors/?sort=place:asc&pagination[pageSize]=3');
   if (!BEST_AUTHORS || !BEST_AUTHORS.results) return;

   const TREND_AUTHORS = await fetchGetQuery('http://https://api.longlivevinyl.ru/api/authors/?sort=listenings:desc&pagination[pageSize]=3');
   if (!TREND_AUTHORS || !TREND_AUTHORS.results) return;

   return (
      <div className={`page-wrapper flex flex-col ${styles.wrapper}`}>
         <div className="content-wrapper section-banner">
            <h1 className="content-wrapper caption-88 title section-title text-white text-center">Исполнители</h1>
            <p className="text-24 text-white text-center">Музыкальные звезды мировой сцены</p>
            <Image
               src="https://i.pinimg.com/564x/4d/09/44/4d09444377b02927b5b81c7daefc9bbd.jpg"
               width="1500"
               height="1500"
               alt=""
               className={styles.bannerImage}
            />
         </div>
         <StickyLine>
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
         <section className={`content-wrapper flex flex-col ${styles.bestsellersWrapper}`}>
            <h2 className={`caption-32 title`}>
               Наши <span className="text-red">Бестселлеры</span>
            </h2>
            <div className={`${styles.bestsellers}`}>
               {BEST_AUTHORS.results.map((item, index) => (
                  <div className={`${index + 1 === 1 && styles.bestsellerFirst}`} key={index}>
                     <AuthorCardSpecial author={item} largeCard={index + 1 === 1 && true} />
                  </div>
               ))}
            </div>
         </section>

         <section className={`content-wrapper flex flex-col ${styles.trendsWrapper}`}>
            <h2 className={`caption-32 title`}>
               Сейчас в <span className="text-red">Тренде</span>
            </h2>
            <div className={`${styles.trends}`}>
               {TREND_AUTHORS.results.map((item, index) => {
                  item.place = index + 1;
                  return (
                     <div className={`${index + 1 === 1 && styles.bestsellerFirst}`} key={index}>
                        <AuthorCardSpecial author={item} showListenings={true} largeCard={index + 1 === 1 && true} />
                     </div>
                  );
               })}
            </div>
         </section>

         <section className={`content-wrapper flex flex-col ${styles.galleryWrapper}`}>
            <h2 className={`caption-32 title`}>
               Наши <span className="text-red">друзья</span>
            </h2>
            <div className={`${styles.galleryLayout}`}>
               <div className={`${styles.gallerySection}`}>
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/20/bd/c4/20bdc4b045c1ad79960710768ff6553e.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/05/50/f5/0550f537952101a9e8ddf77eaef9bbd4.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/10/9e/60/109e60dc8edebdc1ed5a26808d75a0b8.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
               </div>
               <div className={`${styles.gallerySection}`}>
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/09/4e/a5/094ea5f5eecc18ab5a88222821c14f94.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/52/2e/85/522e85f33e0655b2a9931e22ba7ec0a3.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/77/8b/7f/778b7f729dab9e9c33428d446d36c132.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
               </div>
               <div className={`${styles.gallerySection}`}>
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/e2/5f/0e/e25f0e40a2118bc823089797d331029a.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/ea/59/7b/ea597b846346174a063f1588605e6cda.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/f2/73/e0/f273e06a7def1fc74da52a873b38294f.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
               </div>
               <div className={`${styles.gallerySection}`}>
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/0e/2e/fd/0e2efd347283f6ae4170c179e0a02a22.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/5f/52/84/5f5284562f1c96cee149c2ca03bc9ae2.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/c9/97/49/c99749dfbcca3927a44fb8c53ac40da9.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
               </div>
            </div>
         </section>

         <SeoBlock
            text={[
               `Мы рады вас видеть в нашем журнале - уголке, где звезды музыки оживают в каждом кадре. Long Live Vinyl - это не просто журнал, это сообщество, где каждый музыкальный гений находит свое место.`,
               `Мы гордимся нашими друзьями-звездами, которые разделяют с нами свои творческие вдохновения и истории успеха. Здесь вы встретите имена, знакомые всему миру - от музыкантов до режиссеров, от композиторов до артистов.`,
               `Long Live Vinyl - это проект, дружелюбный ко всем, где каждая встреча - это возможность для новых знакомств и открытий. Присоединяйтесь к нам и окунитесь в мир, где дружба сочетается с творчеством, а каждый день приносит новые, захватывающие открытия.`,
            ]}
            caption={'Приятная компания'}
         />
      </div>
   );
}
