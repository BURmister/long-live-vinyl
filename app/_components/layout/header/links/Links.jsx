'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Burger } from '../burger/Burger';
import styles from './styles.module.scss';

const defaultIcon = (
   <svg className={styles.uiVinyl} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
         d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
         fill="var(--red)"
      />
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
         fill="var(--red)"
      />
   </svg>
);

const NAV_LIST = [
   {
      name: 'Винил',
      path: '/catalog',
      icon: (
         <>
            <svg className={styles.uiVinyl} fill="var(--red)" height="24px" width="24px" version="1.1" id="Layer_1" viewBox="0 0 512 512">
               <path d="M437.02,74.98C388.668,26.628,324.381,0,256,0S123.332,26.628,74.98,74.98C26.628,123.332,0,187.619,0,256    c0,68.382,26.628,132.668,74.98,181.021C123.332,485.372,187.619,512,256,512s132.668-26.628,181.02-74.979    C485.372,388.668,512,324.382,512,256C512,187.619,485.372,123.332,437.02,74.98z M256,478.609    c-122.746,0-222.609-99.862-222.609-222.609S133.254,33.391,256,33.391S478.609,133.254,478.609,256S378.746,478.609,256,478.609z    " />
               <path d="M401.963,131.928l-23.804,23.417c25.183,25.599,39.625,62.285,39.625,100.651c0,38.371-14.443,75.06-39.627,100.659    l23.805,23.417c31.275-31.793,49.213-77.017,49.213-124.077C451.177,208.942,433.239,163.721,401.963,131.928z" />
               <path d="M360.956,168.621l-23.804,23.417c15.964,16.227,25.12,39.54,25.12,63.961c0,24.423-9.156,47.737-25.119,63.962    l23.802,23.419c22.057-22.42,34.709-54.269,34.709-87.382C395.664,222.889,383.014,191.042,360.956,168.621z" />
               <path d="M256,168.205c-48.41,0-87.794,39.385-87.794,87.795S207.59,343.795,256,343.795S343.794,304.41,343.794,256    C343.794,207.59,304.41,168.205,256,168.205z M239.304,307.772c-3.152-1.02-6.182-2.312-9.055-3.862l9.055-7.284V307.772z     M239.304,253.768l-32.256,25.949c-3.489-7.172-5.452-15.22-5.452-23.718c0.001-24.174,15.854-44.708,37.708-51.772V253.768z     M272.696,307.771v-11.146l9.055,7.284C278.878,305.459,275.848,306.753,272.696,307.771z M304.951,279.718l-32.255-25.949v-49.54    c21.853,7.064,37.707,27.598,37.707,51.772C310.402,264.498,308.44,272.545,304.951,279.718z" />
            </svg>
            {/* <svg
               stroke="var(--red)"
               fill="var(--red)"
               strokeWidth="0"
               viewBox="0 0 512 512"
               height="42px"
               width="42px"
               xmlns="http://www.w3.org/2000/svg">
               <path d="M256 64v225.1c-12.6-7.3-27.1-11.7-42.7-11.7-47.1 0-85.3 38.2-85.3 85.3s38.2 85.3 85.3 85.3 85.3-38.2 85.3-85.3V149.3H384V64H256z"></path>
            </svg>
            <svg
               stroke="var(--red)"
               fill="var(--red)"
               strokeWidth="0"
               viewBox="0 0 24 24"
               height="42px"
               width="42px"
               xmlns="http://www.w3.org/2000/svg">
               <path fill="none" d="M0 0h24v24H0V0z"></path>
               <path d="m12 3 .01 10.55c-.59-.34-1.27-.55-2-.55a4.001 4.001 0 1 0 0 8c2.22 0 3.99-1.79 3.99-4V7h4V3h-6zm-1.99 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
            </svg> */}
         </>
      ),
   },
   {
      name: 'Журнал',
      path: '/magazine',
      icon: (
         <svg
            className={styles.uiVinyl}
            xmlns="http://www.w3.org/2000/svg"
            fill="var(--red)"
            width="42px"
            height="42px"
            viewBox="0 0 750 750"
            id="Layer_1">
            <path d="M591.11,455.19c-2.1-15.24-6.01-30.17-7.83-45.44-3.77-27.94-1.9-56.22-1.74-84.3-.59-25.65-2.46-51.25-3.31-76.9-.24-12.74-1.45-42.84-20.78-36.25-8.37,5.23-18.4,28.93-21.77,39.04-.4,1.57-.57,3.09-.56,4.54-7.23,15.86-13.71,47.12-35.98,67.47-22.8,24.16-58.62,7.72-86.62,4.94-2.69-.12-4.92,1.12-6.63,2.99-3.03-.1-6.32,1.39-8.87,4.13-8.24,9.72-18.61,19.27-32.3,19.88-25.92,1.05-53.09-3.31-74.13-19.45-33.88-22.33-68.44-80.83-109.59-80.9-5.35-.44-11.24,.28-15.62,2.79-5.78-6.11-15.07-4.8-17.41,8.44,.06,32.93,6.72,65.7,8.62,98.6,4.9,67.67,16.06,134.69,23.11,202.13,2.02,14.36,14.83,13.36,18.76,4.28,5.84,4.58,14.6,7.12,21.24,9.53,20.44,7.45,41.65,12.93,63.34,15.02,28.53,3.31,57.32,2.5,85.96,2.35,9.05,1.74,15.82,9.3,24.8,11.57,4.75,1.56,9,.87,12.72-1.14,8.03,3.64,16.65-2.85,24.54-4.8,42.21-12.85,74.67-43.34,108.01-70.72,19.11-14.96,58.61-4.38,62.93-35.32,.44-14.71-3.55-29.75-10.89-42.49Zm-219.72,116.68c-22.3-2.67-44.97-1.07-67.37-2.49-34.61-1.58-66.72-14.84-99.4-24.53-2.81-.53-5.26,.38-7.22,2.02-3.66-22.92-9.94-45.42-12.43-68.55-4.79-64.52-6.16-129.36-13.2-193.72,9.64,1.31,23-.23,34.29,10.5,39.64,28.38,68.81,79.19,122.33,80.55,20.56,1.33,43.79,2.87,61.95-7.12-1.01,34.5,.65,69.18,1.52,103.66,.39,20.29,3.21,40.38,7.54,60.19,3.44,13.3,5.29,27.42,9.89,40.43-.59,.23-1.18,.46-1.76,.7-5.6,2.48-8.85,7.96-9.79,13.97-9.47-3.84-15.88-13.78-26.34-15.62Zm107.72-24.44c-15.39,10.27-33.34,14.31-50.96,19.28-.33-.54-.7-1.07-1.14-1.6-1.08-.9-2.09-1.52-3.06-1.91-3.25-10.29-4.12-21.46-6.32-31.98-8-57.66-3.36-115.96-4.85-173.91,2.92,1.26,6.11,2.11,9.17,2.63,12.28,3.79,25,5.5,37.84,5.71,41.97,5.93,69.12-34.79,83.93-68.48,3.67-9.03,5.68-18.56,7.84-28.02,.39-.83,.75-1.71,1.08-2.61,1.52-1.41,2.93-3.41,4.1-6.09,5.24,75.19,7.51,150.83,20.91,225.08-56.87,4.32-57.26,35.61-98.54,61.9Z" />
            <path d="M463.01,421.2c17.51,3.52,34.51-2.56,47.87-13.92,5.23-3.91,10.49-7.78,15.72-11.71,8.27-6.95,6.77-24.56-4.54-27.49-2.99-.58-5.56,.5-7.91,2.26-17.46,13.66-31.31,25.59-55,20.84-20.16-.13-18.32,31.44,3.86,30.01Z" />
            <path d="M530.32,424.06c-15.51,.38-21.57,26.89-58.61,24.41-10.76-1.43-20.66,2.05-20.46,14.46-.63,11.01,9.53,15.86,19.19,15.28,17.77,2.06,35.94-3.31,49.96-14.4,4.96-3.9,9.84-7.98,14.45-12.29,8.09-7.2,6.9-24.39-4.53-27.46Z" />
            <path d="M335.04,427.69c14.22-.79,14.23-27.34,0-28.18-21.44-.43-43.29,.32-64.16-5.35-14.44-4.03-26.31-13.44-38.66-21.53-7.71-6.32-17.93-9.22-22.09,2.35-5.16,13.45,8.13,22.1,17.72,28.55,29.83,26.01,70.04,24.34,107.19,24.16Z" />
            <path d="M350.92,465.31c-19.73,6.45-40.59,14.93-61.42,8.26-16-1.88-52.69-38.24-60.16-11.75-2.84,10.35,5.02,18.28,14.21,21.34,17.5,9.6,35,21.21,55.6,21.9,15.2,1.23,29.96-3.76,44.23-8.36,7.27-2.97,17.82-2.99,20.35-11.94,3.49-8.36-2.05-22.93-12.81-19.45Z" />
            <path d="M318.8,256.75c3.46,4.55,10.55,4.45,14.04,0,13.37-16.71-16.13-45.43-24.19-60.76-12.27-16.01-26.72,8.22-17.42,19.92,9.4,13.46,17.91,27.61,27.56,40.83Z" />
            <path d="M439.02,222.44c-1.5-10.16-4.56-20.52,.54-30.26,1.73-4.03,3.54-8.02,5.48-11.95,7.89-13.62-8.94-34.56-19.36-16.54-11.57,20.81-16.97,46.23-6.22,68.51,7,13.8,22.02,2.42,19.56-9.75Z" />
            <path d="M501.33,209.39c7.78,4.67,13.58-3.91,16.45-10.23,3.46-5.78,7.52-11.15,11.33-16.7,4.08-5.96,8.18-11.92,12.25-17.89,6.23-8.43,2.08-26.5-10.42-24.98-9.8,3.56-16,20.52-23.1,28.57-7.59,11.1-20.44,30.23-6.51,41.24Z" />
         </svg>
      ),
   },
   // {
   //    name: 'Винил месяца',
   //    path: '/month',
   //    icon: (
   //       <svg className={styles.uiVinyl} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
   //          <path
   //             d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
   //             fill="var(--red)"
   //          />
   //          <path
   //             fillRule="evenodd"
   //             clipRule="evenodd"
   //             d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
   //             fill="var(--red)"
   //          />
   //       </svg>
   //    ),
   // },
   {
      name: 'Исполнители',
      path: '/authors',
      icon: (
         <svg className={styles.uiVinyl} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
               d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
               fill="var(--red)"
            />
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
               fill="var(--red)"
            />
         </svg>
      ),
   },
   {
      name: 'О Проекте',
      path: '/about',
      icon: (
         <svg className={styles.uiVinyl} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
               d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
               fill="var(--red)"
            />
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
               fill="var(--red)"
            />
         </svg>
      ),
   },
];

export const Links = ({ setWhiteLogo }) => {
   const pathname = usePathname();

   return (
      <div className={styles.wrapper}>
         <nav>
            <ul className={`flex ${styles.link_list}`}>
               {NAV_LIST.map((item, index) => (
                  <li key={'nav-' + index}>
                     <Link className={`caption-24 hover-underline ${styles.link} ${pathname === item.path ? 'active' : ''}`} href={item.path}>
                        {item.name}
                     </Link>
                  </li>
               ))}
            </ul>
            <ul className={`${styles.link_list} ${styles.mobList}`}>
               <li>
                  <Link className={`${styles.catalogBtn} ${pathname === '/catalog' ? 'active-icon' : ''}`} href="/catalog">
                     <svg fill="var(--black)" height="24px" width="24px" version="1.1" id="Layer_1" viewBox="0 0 512 512">
                        <path d="M437.02,74.98C388.668,26.628,324.381,0,256,0S123.332,26.628,74.98,74.98C26.628,123.332,0,187.619,0,256    c0,68.382,26.628,132.668,74.98,181.021C123.332,485.372,187.619,512,256,512s132.668-26.628,181.02-74.979    C485.372,388.668,512,324.382,512,256C512,187.619,485.372,123.332,437.02,74.98z M256,478.609    c-122.746,0-222.609-99.862-222.609-222.609S133.254,33.391,256,33.391S478.609,133.254,478.609,256S378.746,478.609,256,478.609z    " />
                        <path d="M401.963,131.928l-23.804,23.417c25.183,25.599,39.625,62.285,39.625,100.651c0,38.371-14.443,75.06-39.627,100.659    l23.805,23.417c31.275-31.793,49.213-77.017,49.213-124.077C451.177,208.942,433.239,163.721,401.963,131.928z" />
                        <path d="M360.956,168.621l-23.804,23.417c15.964,16.227,25.12,39.54,25.12,63.961c0,24.423-9.156,47.737-25.119,63.962    l23.802,23.419c22.057-22.42,34.709-54.269,34.709-87.382C395.664,222.889,383.014,191.042,360.956,168.621z" />
                        <path d="M256,168.205c-48.41,0-87.794,39.385-87.794,87.795S207.59,343.795,256,343.795S343.794,304.41,343.794,256    C343.794,207.59,304.41,168.205,256,168.205z M239.304,307.772c-3.152-1.02-6.182-2.312-9.055-3.862l9.055-7.284V307.772z     M239.304,253.768l-32.256,25.949c-3.489-7.172-5.452-15.22-5.452-23.718c0.001-24.174,15.854-44.708,37.708-51.772V253.768z     M272.696,307.771v-11.146l9.055,7.284C278.878,305.459,275.848,306.753,272.696,307.771z M304.951,279.718l-32.255-25.949v-49.54    c21.853,7.064,37.707,27.598,37.707,51.772C310.402,264.498,308.44,272.545,304.951,279.718z" />
                     </svg>
                  </Link>
               </li>
               <li>
                  <Link className={`${pathname === '/magazine' ? 'active-icon' : ''}`} href="/magazine">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="var(--black)" width="42px" height="42px" viewBox="0 0 750 750" id="Layer_1">
                        <path d="M591.11,455.19c-2.1-15.24-6.01-30.17-7.83-45.44-3.77-27.94-1.9-56.22-1.74-84.3-.59-25.65-2.46-51.25-3.31-76.9-.24-12.74-1.45-42.84-20.78-36.25-8.37,5.23-18.4,28.93-21.77,39.04-.4,1.57-.57,3.09-.56,4.54-7.23,15.86-13.71,47.12-35.98,67.47-22.8,24.16-58.62,7.72-86.62,4.94-2.69-.12-4.92,1.12-6.63,2.99-3.03-.1-6.32,1.39-8.87,4.13-8.24,9.72-18.61,19.27-32.3,19.88-25.92,1.05-53.09-3.31-74.13-19.45-33.88-22.33-68.44-80.83-109.59-80.9-5.35-.44-11.24,.28-15.62,2.79-5.78-6.11-15.07-4.8-17.41,8.44,.06,32.93,6.72,65.7,8.62,98.6,4.9,67.67,16.06,134.69,23.11,202.13,2.02,14.36,14.83,13.36,18.76,4.28,5.84,4.58,14.6,7.12,21.24,9.53,20.44,7.45,41.65,12.93,63.34,15.02,28.53,3.31,57.32,2.5,85.96,2.35,9.05,1.74,15.82,9.3,24.8,11.57,4.75,1.56,9,.87,12.72-1.14,8.03,3.64,16.65-2.85,24.54-4.8,42.21-12.85,74.67-43.34,108.01-70.72,19.11-14.96,58.61-4.38,62.93-35.32,.44-14.71-3.55-29.75-10.89-42.49Zm-219.72,116.68c-22.3-2.67-44.97-1.07-67.37-2.49-34.61-1.58-66.72-14.84-99.4-24.53-2.81-.53-5.26,.38-7.22,2.02-3.66-22.92-9.94-45.42-12.43-68.55-4.79-64.52-6.16-129.36-13.2-193.72,9.64,1.31,23-.23,34.29,10.5,39.64,28.38,68.81,79.19,122.33,80.55,20.56,1.33,43.79,2.87,61.95-7.12-1.01,34.5,.65,69.18,1.52,103.66,.39,20.29,3.21,40.38,7.54,60.19,3.44,13.3,5.29,27.42,9.89,40.43-.59,.23-1.18,.46-1.76,.7-5.6,2.48-8.85,7.96-9.79,13.97-9.47-3.84-15.88-13.78-26.34-15.62Zm107.72-24.44c-15.39,10.27-33.34,14.31-50.96,19.28-.33-.54-.7-1.07-1.14-1.6-1.08-.9-2.09-1.52-3.06-1.91-3.25-10.29-4.12-21.46-6.32-31.98-8-57.66-3.36-115.96-4.85-173.91,2.92,1.26,6.11,2.11,9.17,2.63,12.28,3.79,25,5.5,37.84,5.71,41.97,5.93,69.12-34.79,83.93-68.48,3.67-9.03,5.68-18.56,7.84-28.02,.39-.83,.75-1.71,1.08-2.61,1.52-1.41,2.93-3.41,4.1-6.09,5.24,75.19,7.51,150.83,20.91,225.08-56.87,4.32-57.26,35.61-98.54,61.9Z" />
                        <path d="M463.01,421.2c17.51,3.52,34.51-2.56,47.87-13.92,5.23-3.91,10.49-7.78,15.72-11.71,8.27-6.95,6.77-24.56-4.54-27.49-2.99-.58-5.56,.5-7.91,2.26-17.46,13.66-31.31,25.59-55,20.84-20.16-.13-18.32,31.44,3.86,30.01Z" />
                        <path d="M530.32,424.06c-15.51,.38-21.57,26.89-58.61,24.41-10.76-1.43-20.66,2.05-20.46,14.46-.63,11.01,9.53,15.86,19.19,15.28,17.77,2.06,35.94-3.31,49.96-14.4,4.96-3.9,9.84-7.98,14.45-12.29,8.09-7.2,6.9-24.39-4.53-27.46Z" />
                        <path d="M335.04,427.69c14.22-.79,14.23-27.34,0-28.18-21.44-.43-43.29,.32-64.16-5.35-14.44-4.03-26.31-13.44-38.66-21.53-7.71-6.32-17.93-9.22-22.09,2.35-5.16,13.45,8.13,22.1,17.72,28.55,29.83,26.01,70.04,24.34,107.19,24.16Z" />
                        <path d="M350.92,465.31c-19.73,6.45-40.59,14.93-61.42,8.26-16-1.88-52.69-38.24-60.16-11.75-2.84,10.35,5.02,18.28,14.21,21.34,17.5,9.6,35,21.21,55.6,21.9,15.2,1.23,29.96-3.76,44.23-8.36,7.27-2.97,17.82-2.99,20.35-11.94,3.49-8.36-2.05-22.93-12.81-19.45Z" />
                        <path d="M318.8,256.75c3.46,4.55,10.55,4.45,14.04,0,13.37-16.71-16.13-45.43-24.19-60.76-12.27-16.01-26.72,8.22-17.42,19.92,9.4,13.46,17.91,27.61,27.56,40.83Z" />
                        <path d="M439.02,222.44c-1.5-10.16-4.56-20.52,.54-30.26,1.73-4.03,3.54-8.02,5.48-11.95,7.89-13.62-8.94-34.56-19.36-16.54-11.57,20.81-16.97,46.23-6.22,68.51,7,13.8,22.02,2.42,19.56-9.75Z" />
                        <path d="M501.33,209.39c7.78,4.67,13.58-3.91,16.45-10.23,3.46-5.78,7.52-11.15,11.33-16.7,4.08-5.96,8.18-11.92,12.25-17.89,6.23-8.43,2.08-26.5-10.42-24.98-9.8,3.56-16,20.52-23.1,28.57-7.59,11.1-20.44,30.23-6.51,41.24Z" />
                     </svg>
                  </Link>
               </li>
               <li>
                  <Burger
                     NAV_LIST={NAV_LIST}
                     setWhiteLogo={() => setWhiteLogo()}
                     icon={NAV_LIST.find((item) => item.path === pathname)?.icon ? NAV_LIST.find((item) => item.path === pathname).icon : defaultIcon}
                  />
               </li>
            </ul>
         </nav>
      </div>
   );
};
