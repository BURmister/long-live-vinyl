'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './styles.module.scss';

const NAV_LIST = [
   {
      name: 'Каталог',
      path: '/catalog',
   },
   {
      name: 'Пластинки месяца',
      path: '/month',
   },
   {
      name: 'Новости',
      path: '/news',
   },
   {
      name: 'О Компании',
      path: '/about',
   },
];

export const Links = () => {
   const pathname = usePathname();

   return (
      <div className={styles.wrapper}>
         <nav>
            <ul className={`flex ${styles.link_list}`}>
               {NAV_LIST.map((item, index) => (
                  <li key={index}>
                     <Link className={`caption-24 hover-underline ${styles.link} ${pathname === item.path ? 'active' : ''}`} href={item.path}>
                        {item.name}
                     </Link>
                  </li>
               ))}
            </ul>
         </nav>
      </div>
   );
};
