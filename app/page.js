import Link from 'next/link';

import { Sale } from './components/sale/Sale';
import { ProductSlider } from './components/product-slider/ProductSlider';

import styles from './styles.module.scss';

export default function Home() {
   return (
      <main className={`content-wrapper ${styles.home_page}`}>
         <section className={styles.home}>
            <h1>Long Live Vinyl</h1>
            <div className={styles.home_desc}>
               <Link href="/">Каталог</Link>
               <p className={`text-20`}>
                  VMP существует для того, чтобы углубить связь с музыкой для всех. Мы - рассказчики, кураторы и сообщество, которые понимают влияние,
                  которое может оказать великий альбом на человека. Мы твердо верим, что винил - лучший носитель для создания этих впечатлений.
               </p>
            </div>
         </section>
         <Sale />
         <ProductSlider highlightCaption="Новинки" sliderCaption="в нашей коллекции" />
      </main>
   );
}
