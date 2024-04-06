export const StickyLine = ({ children }) => {
   return (
      <div className="sticky-line">
         <div className="content-wrapper sticky-line-wrapper flex">{children}</div>
      </div>
   );
};
