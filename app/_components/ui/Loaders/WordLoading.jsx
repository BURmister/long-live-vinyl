export const WordLoading = ({ loaderRef }) => {
   if (loaderRef) {
      return (
         <p ref={loaderRef} className="caption-32 text-center text-red">
            Загрузка...
         </p>
      );
   }

   return <p className="caption-32 text-center text-red">Загрузка...</p>;
};
