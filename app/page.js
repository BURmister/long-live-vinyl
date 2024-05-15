import Link from 'next/link';

import { Sale } from '@/app/_components/layout/Sale/Sale';
import { ProductSlider } from '@/app/_components/layout/ProductSlider/ProductSlider';
import { BestAuthors } from '@/app/_components/layout/BestAuthors/BestAuthors';
import { SeoBlock } from '@/app/_components/layout/SeoBlock/SeoBlock';

import { fetchGetQuery } from '@/app/_hooks/useAxios';

import styles from './styles.module.scss';

const NEW_LIST = [
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
];

const WEEK_LIST = [
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
      id: '_131411102',
      name: 'Meds - 2016',
      author: 'Placebo',
      img: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c1/29/e2/c129e283-a76f-412f-8b6d-7738c9eada8f/5060186926872_1.jpg/1200x1200bf-60.jpg',
   },
];

export default async function Home() {
   const NEW_VINYL = await fetchGetQuery('http://87.242.117.166:1337/api/products/?filters[new]=true&pagination[pageCount]=8');
   const MONTH_VINYL = await fetchGetQuery('http://87.242.117.166:1337/api/products/?filters[bestseller]=true&pagination[pageCount]=8');
   const RARE_VINYL = await fetchGetQuery('http://87.242.117.166:1337/api/products/?filters[rare]=true&pagination[pageCount]=8');

   return (
      <div className={`${styles.home_page}`}>
         <section className={`content-wrapper ${styles.home}`}>
            <h1 className={`caption-88`}>
               Long Live
               <br /> Vinyl
            </h1>
            <div className={styles.home_desc}>
               <Link className={`button-red caption-24 text-white`} href="/catalog">
                  Коллекции
               </Link>
               <p className={`text-20 text-pretty`}>
                  VMP существует для того, чтобы углубить связь с музыкой для всех. Мы - рассказчики, кураторы и сообщество, понимающие влияние,
                  которое может оказать великий альбом на человека. Мы твердо верим, что винил - лучший носитель для создания этих впечатлений.
               </p>
            </div>
         </section>
         {/* <Sale /> */}
         <ProductSlider highlightCaption="Новые" sliderCaption="открытия" data={NEW_VINYL?.results} />
         <ProductSlider highlightCaption="Винил" sliderCaption="месяца" data={MONTH_VINYL?.results} />
         <BestAuthors />
         <ProductSlider highlightCaption="Редкий" sliderCaption="винил" data={RARE_VINYL?.results} />
         {/* <p className="caption-32 text-center">Новости</p> */}
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
