import { notFound } from 'next/navigation';
import { CountDown } from '@/app/_components/ui/CountDown/CountDown';
import { useGetQuery } from '@/app/_hooks/useAxios';
import { SectionProducts } from '../SectionProducts';
import styles from './styles.module.scss';

export const metadata = {
   title: 'Каталог виниловых пластинок Long Live Vinyl ',
   description: 'Всегда лучшие LP в наличии. Ежедневные поступления. Строгая оценка качества. Удобный поиск по исполнителям и стилю.',
};

const PRODUCT_LIST = [
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
];

export default async function CatalogSection({ params }) {
   const SECTION_DATA = await useGetQuery('http://87.242.117.166:1337/api/category/' + params.slug);
   if (!SECTION_DATA || !SECTION_DATA.data) return notFound();

   return (
      <div className={`page-wrapper flex flex-col ${styles.wrapper}`}>
         {params.slug === 'sale' ? (
            <div className={`content-wrapper flex ${styles.captionWrapper}`}>
               <h1 className="caption-32 title">{SECTION_DATA.data.attributes.name}</h1>
               <CountDown />
            </div>
         ) : (
            <h1 className="content-wrapper caption-32 title">{SECTION_DATA.data.attributes.name}</h1>
         )}
         <SectionProducts sectionSlug={params.slug} />
      </div>
   );
}
