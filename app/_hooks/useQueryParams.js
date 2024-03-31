export const useUpdateQueryParam = ({ router, pathname, searchParams }, { name, value, condition = null }) => {
   // now you got a read/write object
   const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

   if (condition && value === condition) current.delete(name);
   else current.set(name, value);

   // cast to string
   const search = current.toString();
   // or const query = `${'?'.repeat(search.length && 1)}${search}`;
   const query = search ? `?${search}` : '';

   return router.push(`${pathname}${query}`, { scroll: false });
};
