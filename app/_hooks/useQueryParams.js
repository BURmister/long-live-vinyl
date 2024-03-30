import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useUpdateQueryParam = (paramName, paramValue, conditionToRemoveParam = null) => {
   const router = useRouter();
   const pathname = usePathname();
   const searchParams = useSearchParams();

   // now you got a read/write object
   const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

   if (conditionToRemoveParam && paramValue === conditionToRemoveParam) current.delete(paramName);
   else current.set(paramName, paramValue);

   // cast to string
   const search = current.toString();
   // or const query = `${'?'.repeat(search.length && 1)}${search}`;
   const query = search ? `?${search}` : '';

   router.push(`${pathname}${query}`, { scroll: false });
};
