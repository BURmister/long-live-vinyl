import Image from 'next/image';

import { StickyLine } from '@/app/_components/ui/StickyLine/StickyLine';
import { SearchBar } from '@/app/_components/ui/SearchBar/SearchBar';
import { SectionList } from '@/app/_components/layout/SectionList/SectionList';

import styles from './styles.module.scss';

export const metadata = {
   title: 'Каталог виниловых пластинок в наличии интернет-магазина Long Live Vinyl | Long Live Vinyl',
   description:
      'Всегда более лучшие LP в наличии. Ежедневные поступления. Строгая оценка качества. Удобный поиск по исполнителям и стилю. Доставка по Санкт-Петербургу и всей России.',
};

const SECTION_LIST = [
   {
      name: 'Рок',
      path: '/catalog/rock/',
      image: 'https://i.pinimg.com/564x/2e/9e/1e/2e9e1ee280736fe8215cf43efe66fd84.jpg',
   },
   {
      name: 'Рэп',
      path: '/catalog/rap/',
      image: 'https://i.pinimg.com/736x/1d/43/64/1d43647dddf80c557b085a7fd5aa2be0.jpg',
   },
   {
      name: 'Хип-хоп',
      path: '/catalog/hiphop/',
      image: 'https://i.pinimg.com/564x/85/14/b6/8514b6de46d80691e71deb3232c2a626.jpg',
   },
   {
      name: 'Панк',
      path: '/catalog/punk/',
      image: 'https://i.pinimg.com/564x/e9/7c/26/e97c26c6265b0e9610215ce33b35e459.jpg',
   },
   {
      name: 'Поп панк',
      path: '/catalog/pop-punk/',
      image: 'https://i.pinimg.com/564x/af/71/22/af71222525f6461cfadb8b37955df6b8.jpg',
   },
   {
      name: 'Альтернатива',
      path: '/catalog/alternative/',
      image: 'https://i.pinimg.com/564x/b6/e7/f1/b6e7f12385f556107a5d70ee254e398d.jpg',
   },
   {
      name: 'Metalcore',
      path: '/catalog/metalcore/',
      image: 'https://i.pinimg.com/564x/b9/f5/eb/b9f5ebc20e8371241ac10c74b1e270a2.jpg',
   },
   {
      name: 'Джаз',
      path: '/catalog/jazz/',
      image: 'https://i.pinimg.com/736x/13/00/27/130027e068d3461fa0075708370a3b14.jpg',
   },
];

export default function Catalog() {
   return (
      <div className={`page-wrapper flex flex-col ${styles.wrapper}`}>
         <div className="content-wrapper section-banner">
            <h1 className="content-wrapper caption-88 title section-title text-white text-center">Каталог</h1>
            <p className="text-24 text-white text-center">Культовые альбомы, захватывающие открытия, неповторимые эмоции - Винил, Long Live Vinyl</p>
            <Image src="https://i.pinimg.com/originals/33/f6/20/33f620322e0023beec536b448054c899.jpg" width="1500" height="1500" alt="" />
            {/* <Image src="https://boymominjeansblog.com/wp-content/uploads/2019/10/record-store-side-profile.jpg" width="1500" height="1500" alt="" /> */}
         </div>
         <section className="content-wrapper">
            <SectionList data={SECTION_LIST} />
         </section>
         <StickyLine>
            <SearchBar
               icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" x="0" y="0" viewBox="0 0 60.02 60.02">
                     <g>
                        <path
                           d="m59.766 15.896-.363-.386h-1.837l.409-3.34a1.51 1.51 0 0 0-1.502-1.66h-2.437V7c0-.821-.669-1.49-1.491-1.49h-2.509V2c0-.821-.669-1.49-1.491-1.49H11.526c-.821 0-1.49.669-1.49 1.49v3.51h-2.51c-.821 0-1.49.669-1.49 1.49v3.51H3.599c-.426 0-.834.182-1.12.497a1.519 1.519 0 0 0-.379 1.185l.406 3.318h-1.37c-.321 0-.623.141-.83.386l-.306.41 5.959 41.856a1.629 1.629 0 0 0 1.605 1.348h44.942c.791 0 1.467-.565 1.611-1.38l5.886-41.352a1.075 1.075 0 0 0-.237-.882zM12.036 2.51h36v3h-36v-3zm-4 5h44v3h-44v-3zm-3.883 5h51.765l-.367 3H4.521l-.368-3zm48.034 45H7.886l-5.695-40H57.88l-5.693 40z"
                           fill="#000000"></path>
                        <path
                           d="M29.536 20.51c-11.304 0-20.5 7.626-20.5 17s9.196 17 20.5 17 20.5-7.626 20.5-17-9.196-17-20.5-17zm0 32c-10.201 0-18.5-6.729-18.5-15s8.299-15 18.5-15 18.5 6.729 18.5 15-8.299 15-18.5 15z"
                           fill="#000000"></path>
                        <path
                           d="M30.536 25.449a1 1 0 0 0-1-1c-3.993 0-7.778 1.21-10.946 3.499a1 1 0 0 0 1.172 1.621c2.824-2.041 6.204-3.12 9.774-3.12a1 1 0 0 0 1-1zM30.536 29.2a1 1 0 0 0-1-1c-3.105 0-6.049.941-8.512 2.723a1 1 0 0 0 1.172 1.621c2.12-1.533 4.658-2.344 7.34-2.344a1 1 0 0 0 1-1zM30.536 32.95a1 1 0 0 0-1-1c-2.229 0-4.339.68-6.104 1.967a.998.998 0 1 0 1.178 1.615c1.42-1.035 3.124-1.582 4.926-1.582a1 1 0 0 0 1-1zM39.4 45.638c-2.824 2.042-6.204 3.121-9.774 3.121a1 1 0 1 0 0 2c3.994 0 7.779-1.21 10.946-3.5a1 1 0 0 0-1.172-1.621zM28.626 46.008a1 1 0 0 0 1 1c3.106 0 6.05-.942 8.512-2.724a1 1 0 0 0-1.171-1.621c-2.119 1.534-4.657 2.345-7.34 2.345a1 1 0 0 0-1.001 1zM28.626 42.257a1 1 0 0 0 1 1c2.23 0 4.341-.68 6.104-1.967a1 1 0 0 0-1.179-1.615c-1.418 1.035-3.121 1.582-4.925 1.582a1 1 0 0 0-1 1z"
                           fill="#000000"></path>
                        <ellipse cx="29.932" cy="37.494" rx="2.327" ry="1.689" fill="#000000"></ellipse>
                     </g>
                  </svg>
               }
               placeholder={'Друг, винил возьмешь?'}
            />
            <button type="button">
               <svg width="48" height="48" viewBox="0 0 550 550">
                  <g>
                     <path
                        d="M523 459H27a8 8 0 0 1-8-8V131a8 8 0 0 1 8-8h496a8 8 0 0 1 8 8v320a8 8 0 0 1-8 8zM35 443h480V139H35z"
                        fill="#000000"></path>
                     <path
                        d="M491 235H59a8 8 0 0 1 0-16h432a8 8 0 0 1 0 16zM99 203H67a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v32a8 8 0 0 1-8 8zm-24-16h16v-16H75zM163 203h-32a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v32a8 8 0 0 1-8 8zm-24-16h16v-16h-16zM227 203h-32a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v32a8 8 0 0 1-8 8zm-24-16h16v-16h-16zM291 203h-32a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v32a8 8 0 0 1-8 8zm-24-16h16v-16h-16zM355 203h-32a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v32a8 8 0 0 1-8 8zm-24-16h16v-16h-16zM419 203h-32a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v32a8 8 0 0 1-8 8zm-24-16h16v-16h-16zM483 203h-32a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v32a8 8 0 0 1-8 8zm-24-16h16v-16h-16zM155 435c-52.935 0-96-43.065-96-96s43.065-96 96-96 96 43.065 96 96-43.065 96-96 96zm0-176c-44.112 0-80 35.888-80 80s35.888 80 80 80 80-35.888 80-80-35.888-80-80-80z"
                        fill="#000000"></path>
                     <path
                        d="M155 387c-26.467 0-48-21.532-48-48s21.533-48 48-48 48 21.532 48 48-21.533 48-48 48zm0-80c-17.645 0-32 14.355-32 32s14.355 32 32 32 32-14.355 32-32-14.355-32-32-32zM339 315h-32a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v32a8 8 0 0 1-8 8zm-24-16h16v-16h-16z"
                        fill="#000000"></path>
                     <path
                        d="M323 435a8 8 0 0 1-8-8V307a8 8 0 0 1 16 0v120a8 8 0 0 1-8 8zM323 283a8 8 0 0 1-8-8v-24a8 8 0 0 1 16 0v24a8 8 0 0 1-8 8zM403 331h-32a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v32a8 8 0 0 1-8 8zm-24-16h16v-16h-16z"
                        fill="#000000"></path>
                     <path
                        d="M387 435a8 8 0 0 1-8-8V323a8 8 0 0 1 16 0v104a8 8 0 0 1-8 8zM387 299a8 8 0 0 1-8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8zM467 347h-32a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v32a8 8 0 0 1-8 8zm-24-16h16v-16h-16z"
                        fill="#000000"></path>
                     <path
                        d="M451 435a8 8 0 0 1-8-8v-88a8 8 0 0 1 16 0v88a8 8 0 0 1-8 8zM451 315a8 8 0 0 1-8-8v-56a8 8 0 0 1 16 0v56a8 8 0 0 1-8 8z"
                        fill="#000000"></path>
                  </g>
               </svg>
            </button>
         </StickyLine>
      </div>
   );
}
