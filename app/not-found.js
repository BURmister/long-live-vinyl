import Link from 'next/link';

export const metadata = {
   title: 'Страница не найдена | 404',
   description: 'Веб-каталог винила | Long Live Vinyl',
};

export default function NotFound() {
   return (
      <div className="flex flex-col flex-1 justify-center items-center not-found_layout">
         <div className="flex flex-col">
            <h1 className="caption-88 text-red text-center">404</h1>
            <p className="caption-32 text-center">Страница не найдена</p>
         </div>
         <Link class="caption-24 text-center width-fit hover-underline" href="/">
            на главную
         </Link>
      </div>
   );
}
