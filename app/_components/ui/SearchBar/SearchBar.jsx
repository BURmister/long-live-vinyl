'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styles from './styles.module.scss';

export const SearchBar = ({ icon, placeholder }) => {
   const searchParams = useSearchParams();
   const searchQuery = searchParams.get('q') ?? '';

   placeholder = placeholder || 'Еще одна кружечка винила, никогда не бывает лишней';
   const [search, setSearch] = useState(searchQuery);

   const onInput = (event) => {
      setSearch(event.target.value);
      console.log(search);
   };

   return (
      <form className={`search-bar flex items-center`}>
         <input className="text-18 input-normal" type="text" value={search} onChange={(event) => onInput(event)} placeholder={placeholder} name="q" />
         <button className="input-submit" type="submit">
            {icon}
         </button>
      </form>
   );
};
