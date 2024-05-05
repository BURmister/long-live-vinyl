import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

export const SectionList = ({ data, slugPrefix = '/catalog/' }) => {
   return (
      <section className="content-wrapper">
         <ul className={styles.sectionList}>
            {data.map((item, index) => (
               <li key={index} className={item.largeCard && styles.sectionLarge}>
                  <Link href={item.slug ? slugPrefix + item.slug : item.path} className={`${styles.section}`}>
                     <Image src={item.image.url ? 'http://localhost:1337' + item.image.url : item.image} alt={item.Name} width="512" height="512" />
                     <p className="caption-24 text-red">{item.name}</p>
                  </Link>
               </li>
            ))}
         </ul>
      </section>
   );
};
