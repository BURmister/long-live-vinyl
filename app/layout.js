import { Header } from './_components/layout/header/Header';
import { Footer } from './_components/layout/footer/Footer';
import { Providers } from './_providers/reduxProvider';

import './globals.scss';

export const metadata = {
   title: 'Long Live Vinyl - Виниловое место для лонгридов и прослушивания',
   description:
      'Интернет-магазин винила. ⚫️ Прямые поставки из Европы, Японии и Америки. Ежедневное обновление каталога. Бережная доставка по всей России.',
};

export default function RootLayout({ children }) {
   return (
      <Providers>
         <html lang="en">
            <body>
               <Header />
               <main className="flex flex-col">{children}</main>
               <Footer />
            </body>
         </html>
      </Providers>
   );
}
