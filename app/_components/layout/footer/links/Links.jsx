'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';

const LINK_LIST = [
   {
      name: 'Винил',
      path: '/catalog',
   },
   {
      name: 'Журнал',
      path: '/magazine',
   },
   // {
   //    name: 'Винил месяца',
   //    path: '/month',
   // },
   {
      name: 'Исполнители',
      path: '/authors',
   },
   {
      name: 'О Проекте',
      path: '/about',
   },
];

export const Links = () => {
   const pathname = usePathname();

   return (
      <ul className={styles.links}>
         {LINK_LIST.map((item, index) => (
            <li key={index}>
               <Link className={`text-20 text-white hover-underline ${styles.link} ${pathname === item.path ? 'active' : ''}`} href={item.path}>
                  {item.name}
               </Link>
            </li>
         ))}
      </ul>
   );
};
