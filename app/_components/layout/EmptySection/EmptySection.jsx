export const EmptySection = ({ title = 'Раздел пока пуст =/' }) => {
   return <p className="caption-32 text-center text-red">{title}</p>;
};

export const EmptySearch = ({ title = 'По вашему запросу ничего не найдено :(', msg = 'Попробуйте: самый лучший винил' }) => {
   return (
      <div className="flex flex-1 justify-center items-center">
         <p className="caption-32 text-center">
            {title}
            <br />
            {msg}
         </p>
      </div>
   );
};
