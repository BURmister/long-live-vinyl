import Image from 'next/image';
import Link from 'next/link';

import { BackButton } from '@/app/_components/ui/BackButton/BackButton';
import { StickyLine } from '@/app/_components/ui/StickyLine/StickyLine';
import { SearchBar } from '@/app/_components/ui/SearchBar/SearchBar';
import { ShareButton } from '@/app/_components/ui/ShareButton/ShareButton';

import styles from './styles.module.scss';

const AUTHOR = {
   id: '_1405892',
   name: 'Paramore',
   img: 'https://lh3.googleusercontent.com/V-WJPtmH4DSeY_eCKq4uLJuxaUIFe9idKq255SPLRayHYeQ2LCCbmWTAxIC5T1RqrL6odAZF8Q=w1920-h800-p-l90-rj',
   description: [
      'Paramore — американская рок-группа, образовавшаяся во Франклине, штат Теннесси, в 2004 году. В её состав входят Хейли Уильямс, Тейлор Йорк и Зак Фарро. Группа выпустила свой дебютный альбом All We Know Is Falling в 2005 году. Второй альбом Riot! вышел в 2007 году и впоследствии стал платиновым в США и Великобритании, а в Ирландии — золотым. Третий альбом Brand New Eyes вышел 29 сентября 2009 года, возглавил хит-парады многих стран мира, включая Австралию и Великобританию.',
      'Одноимённый альбом Paramore, вышедший 9 апреля 2013 года, дебютировал на первом месте в чартах Billboard в США, в том числе в Billboard 200. Кроме того, альбом занял первое место в чартах Великобритании, Ирландии, Австралии, Новой Зеландии, Бразилии, Аргентины и Мексики. На 57-й церемонии «Грэмми» Paramore выиграли награду в категории «Лучшая рок-песня».',
   ],
   vinylSales: '98 956',
   authorListenings: '642 702 196',
   authorPlace: '1',
};

export default function AuthorDetail({ params }) {
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
                  title={AUTHOR.name}
                  text={'Проект, основанный на музыке, эмоциях и приятных моментах | Long Live Vinyl'}
               />
            </StickyLine>
            <section className={`content-wrapper section-banner ${styles.preview}`}>
               <Image src={AUTHOR.img} width="1500" height="1500" alt="" className={styles.authorImage} />
               <h1 className={`content-wrapper caption-64 title section-title text-white text-center ${styles.authorName}`}>Paramore</h1>
            </section>
            <section className={`content-wrapper flex flex-wrap items-baseline ${styles.statistic}`}>
               <span className={`flex items-baseline ${styles.authorPlace}`}>
                  <p className={`text-48 italic ${AUTHOR.authorPlace === '1' && 'text-red'}`}>#{AUTHOR.authorPlace + '\u00A0'}</p>
                  <p className={`text-32`}>в нашем каталоге</p>
               </span>
               <span className={`flex items-center text-32 ${styles.authorSales}`}>
                  <p className={`text-32`}>
                     {AUTHOR.vinylSales + '\u00A0'}
                  </p>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                        fill="var(--black)"
                     />
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                        fill="var(--black)"
                     />
                  </svg>
               </span>
               <span className={`flex items-center text-32 ${styles.authorListenings}`}>
                  <p className={`text-32`}>
                     {AUTHOR.authorListenings + '\u00A0'}
                  </p>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
                        fill="var(--black)"
                     />
                  </svg>
               </span>
            </section>
            <section className={`content-wrapper ${styles.info}`}>
               <div className={`flex flex-col ${styles.description}`}>
                  {AUTHOR.description.map((item, index) => (
                     <p key={index} className={`text-24`}>
                        {item}
                     </p>
                  ))}
               </div>
            </section>
         </div>
      </>
   );
}
