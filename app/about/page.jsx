import Image from 'next/image';
import styles from './styles.module.scss';

export const metadata = {
   title: 'О проекте Long Live Vinyl',
   description: 'О проекте, основанном на  виниловых пластинках, Long Live Vinyl',
};

export default function About() {
   return (
      <div className={`page-wrapper flex flex-col ${styles.magazine}`}>
         <div className="content-wrapper section-banner">
            <h1 className="content-wrapper caption-88 title section-title text-white text-center">
               Long Live
               <br />
               Vinyl
            </h1>
            <p className="text-24 text-white text-center">Не просто журнал</p>
            <Image
               src="https://i.pinimg.com/564x/ce/56/b5/ce56b5caf8e1e5e98bf9962bd675d922.jpg"
               width="1500"
               height="1500"
               alt=""
               className={styles.bannerImage}
            />
         </div>
         <section className={`content-wrapper ${styles.content}`}>content list</section>
      </div>
   );
}
