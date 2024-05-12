'use client';
import styles from './styles.module.scss';

export const FilterBlock = ({ filterFields, onHandleFilter, onHandleSort }) => {
   // console.log(filterFields);

   return (
      <form className={`flex flex-col ${styles.wrapper}`}>
         <ul className={`flex flex-col ${styles.block} ${styles.sortBlock}`}>
            <li className={`flex input-check-wrapper`}>
               <input
                  className={`input-check`}
                  type="radio"
                  id={`default`}
                  name={'sort-order'}
                  value={'price'}
                  defaultChecked
                  onChange={() => onHandleSort('default', 'default')}
               />
               <label htmlFor={`default`} className={`input-check-marker ${styles.labelValue}`}>
                  <svg
                     stroke="var(--red)"
                     fill="var(--red)"
                     strokeWidth="0"
                     viewBox="0 0 512 512"
                     height="16px"
                     width="16px"
                     xmlns="http://www.w3.org/2000/svg">
                     <path d="M256 64v225.1c-12.6-7.3-27.1-11.7-42.7-11.7-47.1 0-85.3 38.2-85.3 85.3s38.2 85.3 85.3 85.3 85.3-38.2 85.3-85.3V149.3H384V64H256z"></path>
                  </svg>
               </label>
               <label htmlFor={`default`} className={`text-24 input-check-title ${styles.labelValue}`}>
                  {'По умолчанию'}
               </label>
            </li>
            <li className={`flex input-check-wrapper`}>
               <input
                  className={`input-check`}
                  type="radio"
                  id={`price:asc`}
                  name={'sort-order'}
                  value={'price'}
                  onChange={() => onHandleSort('price', 'asc')}
               />
               <label htmlFor={`price:asc`} className={`input-check-marker ${styles.labelValue}`}>
                  <svg
                     stroke="var(--red)"
                     fill="var(--red)"
                     strokeWidth="0"
                     viewBox="0 0 512 512"
                     height="16px"
                     width="16px"
                     xmlns="http://www.w3.org/2000/svg">
                     <path d="M256 64v225.1c-12.6-7.3-27.1-11.7-42.7-11.7-47.1 0-85.3 38.2-85.3 85.3s38.2 85.3 85.3 85.3 85.3-38.2 85.3-85.3V149.3H384V64H256z"></path>
                  </svg>
               </label>
               <label htmlFor={`price:asc`} className={`text-24 input-check-title ${styles.labelValue}`}>
                  {'Дешевле'}
               </label>
            </li>
            <li className={`flex input-check-wrapper`}>
               <input
                  className={`input-check`}
                  type="radio"
                  id={`price:desc`}
                  name={'sort-order'}
                  value={'price'}
                  onChange={() => onHandleSort('price', 'desc')}
               />
               <label htmlFor={`price:desc`} className={`input-check-marker ${styles.labelValue}`}>
                  <svg
                     stroke="var(--red)"
                     fill="var(--red)"
                     strokeWidth="0"
                     viewBox="0 0 512 512"
                     height="16px"
                     width="16px"
                     xmlns="http://www.w3.org/2000/svg">
                     <path d="M256 64v225.1c-12.6-7.3-27.1-11.7-42.7-11.7-47.1 0-85.3 38.2-85.3 85.3s38.2 85.3 85.3 85.3 85.3-38.2 85.3-85.3V149.3H384V64H256z"></path>
                  </svg>
               </label>
               <label htmlFor={`price:desc`} className={`text-24 input-check-title ${styles.labelValue}`}>
                  {'Дороже'}
               </label>
            </li>
         </ul>
         {filterFields && filterFields?.length > 0 ? (
            <ul className={`flex flex-col ${styles.block} ${styles.filterBlock}`}>
               {filterFields?.map((item, index) => {
                  if (item.type === 'boolean')
                     return (
                        <li key={index} className={`flex input-check-wrapper`}>
                           <input
                              className={`input-check`}
                              type="checkbox"
                              id={`${item.name}-${index}`}
                              name={item.name}
                              value={item.title}
                              onChange={(event) => onHandleFilter(item.name, true, event.target.checked)}
                           />
                           <label htmlFor={`${item.name}-${index}`} className={`input-check-marker ${styles.labelValue}`}>
                              <svg
                                 stroke="var(--red)"
                                 fill="var(--red)"
                                 strokeWidth="0"
                                 viewBox="0 0 512 512"
                                 height="16px"
                                 width="16px"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path d="M256 64v225.1c-12.6-7.3-27.1-11.7-42.7-11.7-47.1 0-85.3 38.2-85.3 85.3s38.2 85.3 85.3 85.3 85.3-38.2 85.3-85.3V149.3H384V64H256z"></path>
                              </svg>
                           </label>
                           <label htmlFor={`${item.name}-${index}`} className={`text-24 input-check-title ${styles.labelValue}`}>
                              {item.title}
                           </label>
                        </li>
                     );

                  return (
                     <li key={index} className={`flex flex-col ${styles.blockItem}`}>
                        <h3 className={`caption-24`}>{item.title}</h3>
                        <ul className={`flex flex-col ${styles.valueList}`}>
                           {item?.data?.map((itemValue, index) => (
                              <li key={index} className={`flex input-check-wrapper ${styles.valueWrapper}`}>
                                 <input
                                    className={`input-check`}
                                    type="checkbox"
                                    id={`${item.name}-${index}`}
                                    name={item.name}
                                    value={itemValue}
                                    onChange={(event) => onHandleFilter(item.name, itemValue, event.target.checked)}
                                 />
                                 <label htmlFor={`${item.name}-${index}`} className={`input-check-marker ${styles.labelValue}`}>
                                    <svg
                                       stroke="var(--red)"
                                       fill="var(--red)"
                                       strokeWidth="0"
                                       viewBox="0 0 512 512"
                                       height="16px"
                                       width="16px"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path d="M256 64v225.1c-12.6-7.3-27.1-11.7-42.7-11.7-47.1 0-85.3 38.2-85.3 85.3s38.2 85.3 85.3 85.3 85.3-38.2 85.3-85.3V149.3H384V64H256z"></path>
                                    </svg>
                                 </label>
                                 <label htmlFor={`${item.name}-${index}`} className={`text-24 input-check-title ${styles.labelValue}`}>
                                    {itemValue}
                                 </label>
                              </li>
                           ))}
                        </ul>
                     </li>
                  );
               })}
            </ul>
         ) : (
            <p>Нет доступных полей для фильтрации</p>
         )}
      </form>
   );
};
