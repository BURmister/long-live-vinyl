import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

const AUTHOR = {
   id: '_1405892',
   name: 'Paramore',
   img: 'https://i1.sndcdn.com/artworks-v9bhjNMkCDNi-0-t500x500.jpg',
   props: [
      {
         label: 'Исполнитель',
         value: 'Paramore',
         url: '/authors/paramore',
      },
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
};

export default function AuthorDetail({ params }) {
   return (
      <>
         <div className={`page-wrapper flex flex-col ${styles.wrapper}`}>
            <div className={`content-wrapper ${styles.layout}`}>
               <section className={`flex flex-col ${styles.galleryWrapper}`}>
                  <div className={styles.imgContent}>
                     <Image src={AUTHOR.img} alt="" width="1024" height="1024" />
                  </div>
               </section>
               <section className={`flex flex-col ${styles.contentWrapper}`}>
                  <h1 className="caption-32 title">{AUTHOR.name}</h1>
                  <ul className={`flex flex-col ${styles.propList}`}>
                     {AUTHOR?.props.map((item, index) => (
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
                  </ul>
                  {AUTHOR.markers && <h3 className="caption-32 text-red">{AUTHOR.markers}</h3>}
                  <div className={styles.priceWrapper}>
                     <p className={`text-32`}>23 000 $</p>
                  </div>
               </section>
               <section className={`content-wrapepr ${styles.infoWrapper} ${AUTHOR.description && AUTHOR.tracklist && styles.infoGrid}`}>
                  {AUTHOR.description && <p className="text-20">{AUTHOR.description}</p>}
                  {AUTHOR.tracklist && (
                     <div className={`flex flex-col ${styles.tracklistWrapper}`}>
                        <h2 className="caption-32 text-red">Треклист</h2>
                        <ul className={`flex ${styles.tracklist}`}>
                           {AUTHOR.tracklist.map((item, index) => (
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
            </div>
         </div>
      </>
   );
}
