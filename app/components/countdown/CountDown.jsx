import { useState, useEffect } from 'react';

const COUNTDOWN_TARGET = new Date('2024-03-17T22:00:00');

const getTimeLeft = () => {
   const totalTimeLeft = COUNTDOWN_TARGET - new Date();
   const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
   const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
   const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
   const seconds = Math.floor((totalTimeLeft / 1000) % 60);
   return { days, hours, minutes, seconds };
};

export const CountDown = () => {
   const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

   useEffect(() => {
      const timer = setInterval(() => {
         setTimeLeft(getTimeLeft());
      }, 1000);

      return () => {
         clearInterval(timer);
      };
   }, []);

   return (
      <>
         <p className={`caption-32 text-red w-fit block`}>
            {String(timeLeft.days).length !== 2 ? '0' + timeLeft.days : timeLeft.days}:
            {String(timeLeft.hours).length !== 2 ? '0' + timeLeft.hours : timeLeft.hours}:
            {String(timeLeft.minutes).length !== 2 ? '0' + timeLeft.minutes : timeLeft.minutes}
            <span className={`caption-24 text-red`}>:{String(timeLeft.seconds).length !== 2 ? '0' + timeLeft.seconds : timeLeft.seconds}</span>
         </p>
      </>
   );
};
