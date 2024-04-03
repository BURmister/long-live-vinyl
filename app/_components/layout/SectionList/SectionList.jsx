import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

export const SectionList = ({ data }) => {
   return (
      <ul className={styles.sectionList}>
         {data.map((item, index) => (
            <li key={index}>
               <Link href={item.path} className={`${styles.section}`}>
                  <Image src={item.image} alt="" width="512" height="512" />
                  <p className="caption-24 text-red">{item.name}</p>
               </Link>
            </li>
         ))}
      </ul>
   );
}