import { ScrollUp } from '@/app/_components/ui/ScrollUp/ScrollUp';

export default function CatalogLayout({ children }) {
   return (
      <>
         {children}
         <ScrollUp />
      </>
   );
}
