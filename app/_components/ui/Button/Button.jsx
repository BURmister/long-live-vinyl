'use client';
import styles from './styles.module.scss';

export const SquareIconButton = ({ icon, type = 'button', title, onClick = null }) => {
   const handleClick = () => {
      console.log('click');
      if (onClick !== null) onClick();
   };
   return (
      <button type={type} title={title} onClick={() => handleClick()} className={`button-square-icon`}>
         {icon}
      </button>
   );
};
