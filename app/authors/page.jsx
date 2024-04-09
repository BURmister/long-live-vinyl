import Image from 'next/image';
import { BestAuthors } from '../_components/layout/BestAuthors/BestAuthors';

import styles from './styles.module.scss';

export const metadata = {
   title: 'Исполнители Long Live Vinyl',
   description: 'Музыкальные исполнители, группы, авторы, кумиры и легенды | Long Live Vinyl',
};

export default function Authors() {
   return (
      <div className={`page-wrapper flex flex-col ${styles.wrapper}`}>
         <div className="content-wrapper section-banner">
            <h1 className="content-wrapper caption-88 title section-title text-white text-center">Исполнители</h1>
            <p className="text-24 text-white text-center">Кумиры и легенды из нашего каталога.</p>
            <Image
               src="https://i.pinimg.com/originals/54/94/04/5494048c3792ba934a5031f05dfe8026.jpg"
               width="1500"
               height="1500"
               alt=""
               className={styles.bannerImage}
            />
         </div>
         <section className={`content-wrapper ${styles.content}`}>content</section>
      </div>
   );
}
