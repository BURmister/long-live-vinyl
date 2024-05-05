import Image from 'next/image';

import { SectionList } from '@/app/_components/layout/SectionList/SectionList';
import { SeoBlock } from '@/app/_components/layout/SeoBlock/SeoBlock';
import { StickyLine } from '@/app/_components/ui/StickyLine/StickyLine';
import { SearchBar } from '@/app/_components/ui/SearchBar/SearchBar';

import { useGetQuery } from '@/app/_hooks/useAxios';

import styles from './styles.module.scss';

export const metadata = {
   title: 'Журнал Long Live Vinyl',
   description: 'Погрузись в прекрасный мир музыки с лучшим журналом про винил | Long Live Vinyl',
};

const SECTION_LIST = [
   {
      name: 'Обзоры',
      path: '/magazine/rewies/',
      image: 'https://i.pinimg.com/564x/40/4f/8d/404f8d1b296516db5afe537440c68121.jpg',
   },
   {
      name: 'Лонгриды',
      path: '/magazine/longreads/',
      image: 'https://i.pinimg.com/564x/cb/a6/dd/cba6dd0f6d391e07bfb39c0a7935cf17.jpg',
   },
   {
      name: 'Интервью',
      path: '/magazine/interviews/',
      image: 'https://i.pinimg.com/564x/70/10/f3/7010f318ebd4da3584184289fa250c59.jpg',
   },
   {
      name: 'HiFi',
      path: '/magazine/hifi/',
      image: 'https://i.pinimg.com/564x/25/77/66/257766c2588d2daf2ed994f6412918bb.jpg',
   },
];

export default async function Magazine() {
   const SECTION_LIST = await useGetQuery('http://localhost:1337/api/magazine-sections/');

   return (
      <div className={`page-wrapper flex flex-col ${styles.magazine}`}>
         <div className="content-wrapper section-banner">
            <h1 className="content-wrapper caption-88 title section-title text-white text-center">Журнал</h1>
            <p className="text-24 text-white text-center">
               Ежедневные публикации интересных статей, честных рецензий, интервью с кумирами и многое другое
            </p>
            <Image src="https://www.piumamusic.com/img/articles/piuma-the-vinyl-aesthetic.jpg" width="1500" height="1500" alt="" />
            {/* <Image src="https://i.pinimg.com/564x/ce/56/b5/ce56b5caf8e1e5e98bf9962bd675d922.jpg" width="1500" height="1500" alt="" /> */}
         </div>
         <StickyLine>
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
         </StickyLine>
         <SectionList data={SECTION_LIST} slugPrefix={'/magazine/'} />

         <section className={`content-wrapper flex flex-col ${styles.galleryWrapper}`}>
            <h2 className={`caption-32 title`}>
               Неповторимые <span className="text-red">эмоции</span>
            </h2>
            <div className={`${styles.galleryLayout}`}>
               <div className={`${styles.gallerySection}`}>
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/48/db/f6/48dbf6cae8e2944721602197eef47cd4.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/06/55/cb/0655cb1dd7dc717e32f19463805a4043.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/6c/94/3e/6c943e4bedb84a2e480c3d696d18c0c8.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/59/e5/90/59e59063550b2af93e7c9dde5270fc00.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/736x/2a/79/f8/2a79f8b1369d66e5630324c2d9b19cae.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/89/63/e9/8963e9643d1e8a5a1624f27b22305380.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
               </div>
               <div className={`${styles.gallerySection}`}>
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/83/3b/6d/833b6d5821d553493b9fc21f10a6e07f.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/dc/69/ad/dc69ad2a17a7462403d2cb54d054dbaf.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/31/03/1d/31031d8d421effaed98f967f406c6dd3.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/47/4a/17/474a17ca4d864e58d018970d6bddb15e.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/c0/2f/61/c02f61489a36e5335d4c114f6bb7d0e8.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/39/5c/48/395c4816ba86240314147f2c52a83a55.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
               </div>
               <div className={`${styles.gallerySection}`}>
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/10/82/d3/1082d39d263f1f7d6834b77ac475873e.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/a2/d7/80/a2d780acddd97fe43172467fba3d64ad.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/0e/82/cc/0e82cc03c17cb692180d3246af8620e4.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/b7/af/69/b7af6950aa774a5887227c4acc28ad69.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/66/bf/a1/66bfa19084a6e9569b7a600319add3c6.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/c4/40/8b/c4408be390e83bff6a0bb4b0e8856d13.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
               </div>
               <div className={`${styles.gallerySection}`}>
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/ca/4f/33/ca4f33d953ffd2d67fdc8273e1d8809c.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/96/e4/16/96e41663cf1f7999256fe7cabd7dcd10.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/b0/34/1a/b0341a9dccab4c26dbc4674fee278fe2.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/95/bc/36/95bc36acb11e431cf17a5a5184133da7.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/f2/5a/36/f25a369e11dc713ebea3493ac48dcc16.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
                  <Image
                     className={styles.galleryImage}
                     src="https://i.pinimg.com/564x/ae/f7/5c/aef75cd9e4d3eb504e7449954976a902.jpg"
                     width="512"
                     height="512"
                     alt=""
                  />
               </div>
            </div>
         </section>
         <SeoBlock
            text={[
               `Добро пожаловать в мир, где каждая пластинка - это история, а каждый трек - магия винила. Long Live Vinyl - это не просто журнал, это
               путеводитель в мире звука, который звучит по-настоящему. Представьте себе мгновения, когда мир замирает, окутывая вас только музыкой.`,
               `Наши страницы - это галерея воспоминаний, вдохновляющих историй и неограниченных возможностей. Мы открываем двери в удивительный мир
               винила, где каждая пластинка становится ключом к особенным моментам и эмоциям. У нас вы найдете эксклюзивные обзоры новых релизов,
               встречи с музыкальными героями прошлого и настоящего, а также вдохновляющие истории коллекционеров со всего мира.`,
               `Погрузитесь в атмосферу винила с Long Live Vinyl - потому что все, что вам нужно для полного погружения в мир звука и стиля, это одна
               виниловая пластинка. Добро пожаловать в музыкальное путешествие вашей жизни. Да здравствует винил!`,
            ]}
            caption={'мир музыкальной магии'}
         />
      </div>
   );
}
