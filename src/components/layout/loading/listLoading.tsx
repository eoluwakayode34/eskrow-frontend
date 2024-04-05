export const ListLoader = () => {
  return (
    <div role="status" className="w-full animate-pulse">
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full  mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full  mb-4"></div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const SingleLoader = ({ className }: { className?: string }) => {
  return (
    <div role="status" className="w-full animate-pulse">
      <div className={`h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-4 ${className}`}></div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};
