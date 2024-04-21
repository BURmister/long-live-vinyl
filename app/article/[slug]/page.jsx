'use client';
import Image from 'next/image';
import Link from 'next/link';

import { BackButton } from '@/app/_components/ui/BackButton/BackButton';
import styles from './styles.module.scss';

import { useState } from 'react';
import { StickyLine } from '@/app/_components/ui/StickyLine/StickyLine';
import { SearchBar } from '@/app/_components/ui/SearchBar/SearchBar';
import { ShareButton } from '@/app/_components/ui/ShareButton/ShareButton';

const PRODUCT = {
   id: '_1405892',
   name: 'PARAMORE — PARAMORE (2LP, COLOURED VINYL)',
   author: {
      name: 'Paramore',
      url: '/authors/paramore',
   },
   img: 'https://i1.sndcdn.com/artworks-v9bhjNMkCDNi-0-t500x500.jpg',
   props: [
      // {
      //    label: 'Исполнитель',
      //    value: 'Paramore',
      //    url: '/authors/paramore',
      // },
      {
         label: 'Альбом',
         value: 'Paramore',
      },
      {
         label: 'Страна',
         value: 'Holland',
      },
      {
         label: 'Лейбл',
         value: 'Fueled By Ramen',
      },
      {
         label: 'Год выпуска/год издания',
         value: '2013/2024',
      },
      {
         label: 'Стиль',
         value: 'Indie / Alternative',
      },
      {
         label: 'Тип',
         value: 'Переиздание',
      },
      {
         label: 'Состояние пластинки/конверта',
         value: 'SS/SS',
      },
      {
         label: 'Размер диска',
         value: '12"',
      },
      {
         label: 'Штрихкод',
         value: '0075678612251',
      },
   ],
   markers: 'TANGERINE VINYL, LIMITED EDITION',
   description:
      'Paramore — американская рок-группа, образовавшаяся во Франклине, штат Теннесси, в 2004 году. В её состав входят Хейли Уильямс, Тейлор Йорк и Зак Фарро. Группа выпустила свой дебютный альбом All We Know Is Falling в 2005 году. Второй альбом Riot! вышел в 2007 году и впоследствии стал платиновым в США и Великобритании, а в Ирландии — золотым. Третий альбом Brand New Eyes вышел 29 сентября 2009 года, возглавил хит-парады многих стран мира, включая Австралию и Великобританию.',
   tracklist: [
      {
         side: 'A1',
         name: 'Fast In My Car',
         duration: '3:42',
         url: '',
      },
      {
         side: 'A2',
         name: 'Now',
         duration: '4:07',
         url: '',
      },
      {
         side: 'A3',
         name: 'Grow Up',
         duration: '3:50',
         url: '',
      },
      {
         side: 'A4',
         name: 'Daydreaming',
         duration: '4:31',
         url: '',
      },
      {
         side: 'B1',
         name: 'Interlude: Moving On',
         duration: '1:30',
         url: '',
      },
      {
         side: 'B2',
         name: "Ain't It Fun",
         duration: '4:56',
         url: '',
      },
      {
         side: 'B3',
         name: 'Part II',
         duration: '4:41',
         url: '',
      },
      {
         side: 'B4',
         name: 'Last Hope',
         duration: '5:09',
         url: '',
      },
      {
         side: 'C1',
         name: 'Still Into You',
         duration: '3:36',
         url: '',
      },
      {
         side: 'C2',
         name: 'Anklebiters',
         duration: '2:17',
         url: '',
      },
      {
         side: 'C3',
         name: 'Interlude: Holiday',
         duration: '1:09',
         url: '',
      },
      {
         side: 'C4',
         name: 'Proof',
         duration: '3:15',
         url: '',
      },
      {
         side: 'C5',
         name: 'Hate To See Your Heart Break',
         duration: '5:09',
         url: '',
      },
      {
         side: 'D1',
         name: '(One Of Those) Crazy Girls',
         duration: '3:32',
         url: '',
      },
      {
         side: 'D2',
         name: "Interlude: I'm Not Angry Anymore",
         duration: '0:52',
         url: '',
      },
      {
         side: 'D3',
         name: 'Be Alone',
         duration: '3:40',
         url: '',
      },
      {
         side: 'D4',
         name: 'Future',
         duration: '7:52',
         url: '',
      },
   ],
};

export default function ProductDetail({ params }) {
   const [productData, setProductData] = useState(PRODUCT);

   return (
      <>
         <div className={`page-wrapper flex flex-col ${styles.wrapper}`}>
            <StickyLine>
               <BackButton />
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
               <ShareButton
                  icon={
                     <svg width="48px" height="48px" viewBox="0 0 64 64">
                        <g>
                           <path
                              d="M36.914 14.545a21.849 21.849 0 0 0-6.803 1.085v-2.98a.804.804 0 1 0-1.607 0v3.574a21.937 21.937 0 1 0 8.41-1.679zm0 42.28a20.323 20.323 0 0 1-8.41-38.83v4.672a3.543 3.543 0 1 0 1.607 2.963v-8.282a20.327 20.327 0 1 1 6.803 39.478zm-8.41-31.195a1.94 1.94 0 1 1-1.94-1.94 1.942 1.942 0 0 1 1.94 1.94zm8.41 4.402a6.457 6.457 0 1 0 6.456 6.458 6.464 6.464 0 0 0-6.456-6.457zm0 11.307a4.85 4.85 0 1 1 4.848-4.85 4.855 4.855 0 0 1-4.848 4.85zm0-5.921a1.071 1.071 0 1 0 1.07 1.072 1.071 1.071 0 0 0-1.07-1.072zm15.762-7.178a17.752 17.752 0 0 0-15.762-9.538.804.804 0 0 0 0 1.607 16.145 16.145 0 0 1 14.338 8.677.804.804 0 1 0 1.424-.746zm-15.762-6.38a.804.804 0 0 0 0 1.607 12.99 12.99 0 0 1 11.563 7.027.803.803 0 0 0 1.426-.74 14.59 14.59 0 0 0-12.989-7.894zm0 3.157a.804.804 0 0 0 0 1.608 9.832 9.832 0 0 1 8.79 5.38.802.802 0 0 0 .715.438.787.787 0 0 0 .364-.089.802.802 0 0 0 .35-1.08 11.428 11.428 0 0 0-10.219-6.257zm0 27.653a16.258 16.258 0 0 1-13.947-7.973.804.804 0 0 0-1.385.816 17.876 17.876 0 0 0 15.332 8.764.804.804 0 1 0 0-1.607zm0-6.316a9.813 9.813 0 0 1-8.405-4.695.803.803 0 0 0-1.367.844 11.408 11.408 0 0 0 9.772 5.458.804.804 0 0 0 0-1.607zm0 3.158a12.935 12.935 0 0 1-11.177-6.332.803.803 0 1 0-1.377.826 14.717 14.717 0 0 0 12.554 7.114.804.804 0 1 0 0-1.607zM17.79 14.492a3.024 3.024 0 1 0 3.025 3.025V7.481a1.913 1.913 0 0 0-2.31-1.872l-7.402 1.565a1.922 1.922 0 0 0-1.519 1.872v7.852a2.984 2.984 0 0 0-1.417-.37 3.024 3.024 0 1 0 3.024 3.025v-7.305l8.016-1.696v4.31a2.984 2.984 0 0 0-1.417-.37zm0 4.442a1.417 1.417 0 1 1 1.417-1.417 1.419 1.419 0 0 1-1.417 1.417zM8.167 20.97a1.417 1.417 0 1 1 1.417-1.417 1.419 1.419 0 0 1-1.417 1.417zm3.024-10.364v-1.56a.307.307 0 0 1 .244-.3l7.403-1.565a.302.302 0 0 1 .256.062.299.299 0 0 1 .113.238V8.91z"
                              fill="var(--black)"></path>
                        </g>
                     </svg>
                  }
                  title={productData.name}
                  text={'Проект, основанный на музыке, эмоциях и приятных моментах | Long Live Vinyl'}
               />
            </StickyLine>
            <div className={`content-wrapper ${styles.layout}`}>
               <section className={`flex flex-col ${styles.galleryWrapper}`}>
                  <div className={styles.imgContent}>
                     <Image src={productData.img} alt="" width="1024" height="1024" />
                  </div>
               </section>
               <section className={`flex flex-col ${styles.contentWrapper}`}>
                  <div className={`flex flex-col ${styles.nameWrapper}`}>
                     <h1 className="caption-32 title">{productData.name}</h1>
                     {productData.author && (
                        <Link className={`text-28 w-fit text-bold hover-underline ${styles.authorName}`} href={productData.author.url}>
                           {productData.author.name}
                        </Link>
                     )}
                  </div>
                  <ul className={`flex flex-col ${styles.propList}`}>
                     {productData?.props.map((item, index) => (
                        <li className={`flex`} key={index}>
                           <p className="text-20">{item.label}:</p>
                           {item.url ? (
                              <Link className="text-24 text-bold hover-underline" href={item.url}>
                                 {item.value}
                              </Link>
                           ) : (
                              <p className="text-24 text-bold">{item.value}</p>
                           )}
                        </li>
                     ))}
                     <li>{productData.markers && <h3 className="caption-32 text-red">{productData.markers}</h3>}</li>
                  </ul>
                  <div className={`flex flex-col ${styles.priceWrapper}`}>
                     <p className={`text-32`}>23 000 $</p>
                  </div>
               </section>
               {(productData.description || productData.tracklist) && (
                  <section className={`flex flex-col ${styles.infoWrapper}`}>
                     {productData.description && <p className={`text-20 ${styles.vinylDescription}`}>{productData.description}</p>}
                     {productData.tracklist && (
                        <div className={`flex flex-col ${styles.tracklistWrapper}`}>
                           <h2 className="caption-32 text-red">Треклист</h2>
                           <ul className={`flex ${styles.tracklist}`}>
                              {productData.tracklist.map((item, index) => (
                                 <li key={index}>
                                    {item.url ? (
                                       <Link className="text-24 text-bold hover-underline" href={item.url}>
                                          {`${item.side && item.side + '. '}${item.name} (${item.duration})`}
                                       </Link>
                                    ) : (
                                       <p className="text-24 text-bold">{`${item.side && item.side + '. '}${item.name} (${item.duration})`}</p>
                                    )}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     )}
                  </section>
               )}
            </div>
         </div>
      </>
   );
}
