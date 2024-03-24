import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

export const ProductCard = ({ product }) => {
   if (!product) return;

   return (
      <div className={styles.card}>
         <Link href="/">
            <Image src={product.img} className={styles.img} width={512} height={512} alt={product.name} />
         </Link>
         <div className={styles.content}>
            <div>
               <Link className={`caption-18 w-fit hover-red text-black ${styles.name}`} href="/">
                  {product.name}
               </Link>
               <Link className={`text-16 w-fit text-grey hover-red ${styles.name_author}`} href="/">
                  {product.author}
               </Link>
            </div>
            <div className={styles.catalogAction}>
               <p className={styles.price}>23 000 $</p>
               <button className={`hover-underline ${styles.btn_buy}`} type="button" onClick={() => console.log('add to cart')}>
                  Купить
               </button>
            </div>
         </div>
      </div>
   );
};
