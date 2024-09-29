'use client';

// import Link from 'next/link';
import Image from 'next/image';
import { Link } from 'next-view-transitions';

import styles from './styles.module.scss';

export const ProductCard = ({ product }) => {
   if (!product) return;
   return (
      <div className={styles.card}>
         <Link href={`/product/${product.slug}`}>
            <Image
               src={product.previewImage && product.previewImage.url ? 'http://https://api.longlivevinyl.ru' + product.previewImage.url : product.img}
               className={styles.img}
               width={512}
               height={512}
               alt={product.name}
               // style={{ viewTransitionName: `view-transition-${product.id}` }}
            />
         </Link>
         <div className={styles.content}>
            <div className={styles.nameWrap}>
               <Link className={`caption-18 w-fit hover-red text-black ${styles.name}`} href={`/product/${product.slug}`}>
                  {product.name}
               </Link>
               <Link className={`text-16 w-fit text-grey hover-red ${styles.name_author}`} href={`/authors/${product?.author?.slug}`}>
                  {product?.author?.name}
               </Link>
            </div>
            <div className={styles.catalogAction}>
               <p className={`text-20 ${styles.price}`}>{Number(product.price).toLocaleString('ru-RU')} ₽</p>
               {/* <button className={`text-20 hover-underline ${styles.btn_buy}`} type="button" onClick={() => console.log('add to cart')}>
                  Купить
               </button> */}
            </div>
         </div>
      </div>
   );
};
