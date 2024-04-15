'use client';

import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const COUNTDOWN_TARGET = new Date('2024-04-23T11:30:00');

const getTimeLeft = () => {
   const totalTimeLeft = COUNTDOWN_TARGET - new Date();
   const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
   const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
   const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
   const seconds = Math.floor((totalTimeLeft / 1000) % 60);
   return { days, hours, minutes, seconds };
};

export const CountDown = () => {
   const [timeLeft, setTimeLeft] = useState(null);

   useEffect(() => {
      const timer = setInterval(() => {
         setTimeLeft(getTimeLeft());
      }, 1000);

      return () => {
         clearInterval(timer);
      };
   }, []);

   if (!timeLeft)
      return (
         <p className={`caption-32 caption-32timer text-red w-fit block`}>
            __ : __ : __ <span className={`caption-24 caption-24timer text-red`}>: __ </span>
         </p>
      );

   return (
      <p className={`caption-32 caption-32timer text-red w-fit block ${styles.content}`}>
         {String(timeLeft.days).length !== 2 ? '0' + timeLeft.days : timeLeft.days}:
         {String(timeLeft.hours).length !== 2 ? '0' + timeLeft.hours : timeLeft.hours}:
         {String(timeLeft.minutes).length !== 2 ? '0' + timeLeft.minutes : timeLeft.minutes}
         <span className={`caption-24 caption-24timer text-red`}>
            :{String(timeLeft.seconds).length !== 2 ? '0' + timeLeft.seconds : timeLeft.seconds}
         </span>
      </p>
   );
};
