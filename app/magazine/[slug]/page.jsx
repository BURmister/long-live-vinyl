import styles from './styles.module.scss';

export const metadata = {
   title: 'Журнал Long Live Vinyl',
   description: 'Погрузись в прекрасный мир музыки с лучшим журналом про винил | Long Live Vinyl',
};



export default function MagazineSection({ params }) {
   return (
      <div className={`page-wrapper flex flex-col ${styles.wrapper}`}>
         <h1 className="content-wrapper caption-32 title">{params.slug}</h1>
         <section className="content-wrapper">content</section>
      </div>
   );
}
