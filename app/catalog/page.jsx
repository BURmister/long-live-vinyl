import { ProductList } from '../_components/ProductList/ProductList';
import styles from './styles.module.scss';

export const metadata = {
   title: 'Каталог виниловых пластинок в наличии интернет-магазина Long Live Vinyl | Long Live Vinyl',
   description:
      'Всегда более лучшие LP в наличии. Ежедневные поступления. Строгая оценка качества. Удобный поиск по исполнителям и стилю. Доставка по Санкт-Петербургу и всей России.',
};

export default function Catalog() {
   return (
      <div className="content-wrapper page-wrapper flex flex-col">
         <h1 className="caption-32">Каталог</h1>
         <section className={styles.topBar}>фильтры</section>
         <ProductList />
      </div>
   );
}
