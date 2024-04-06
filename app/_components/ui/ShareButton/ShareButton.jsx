'use client';
import { SquareIconButton } from '@/app/_components/ui/Button/Button';

export const ShareButton = ({ icon, title, text, url = '' }) => {
   const handleCllick = async () => {
      if (navigator) {
         try {
            await navigator.share({
               title,
               text,
               url,
            });
            console.log('Shared!');
         } catch (error) {
            console.log(`Error: ${error.message}`);
         }
      }
   };

   return <SquareIconButton onClick={() => handleCllick()} icon={icon} title={'Поделиться'} />;
};
