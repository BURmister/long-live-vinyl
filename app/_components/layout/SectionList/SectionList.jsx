import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

export const SectionList = ({ data }) => {
   return (
      <section className="content-wrapper">
         <ul className={styles.sectionList}>
            {data.map((item, index) => (
               <li key={index} className={item.largeCard && styles.sectionLarge}>
                  <Link href={item.path} className={`${styles.section}`}>
                     <Image src={item.image} alt="" width="512" height="512" />
                     <p className="caption-24 text-red">{item.name}</p>
                  </Link>
               </li>

            ))}
         </ul>
      </section>
   );
}