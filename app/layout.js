import { Header } from './_components/header/Header';
import { Footer } from './_components/footer/Footer';

import './globals.scss';

export const metadata = {
   title: 'Long Live Vinyl - Виниловое место для лонгридов и прослушивания',
   description:
      'Интернет-магазин винила. ⚫️ Прямые поставки из Европы, Японии и Америки. Ежедневное обновление каталога. Бережная доставка по всей России.',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <Header />
            <main>{children}</main>
            <Footer />
         </body>
      </html>
   );
}
