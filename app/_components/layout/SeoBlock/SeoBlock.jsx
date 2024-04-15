import Image from 'next/image';
import styles from './styles.module.scss';

import img from '@/public/long-live-vinyl.png';

export const SeoBlock = ({ caption, text }) => {
   return (
      <section className={`content-wrapper ${styles.seoBlock}`}>
         <div className={styles.seoImage}>
            <Image src={img} width="1024" height="1024" alt="" />
         </div>
         <div className={`flex flex-col ${styles.seoText}`}>
            {caption && <h3 className="caption-32 text-red">{caption}</h3>}
            {text?.map((item, index) => (
               <p key={index} className="text-24">
                  {item}
               </p>
            ))}
         </div>
      </section>
   );
};
