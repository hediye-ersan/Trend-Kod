import React from 'react';
import { MoveRight, ArrowLeft, IterationCw, IterationCcw } from 'lucide-react';

const Pagination = ({ total, limit, page, setPage }) => {
  const totalPages = Math.ceil(total / limit);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handleGoToFirstPage = () => {
    setPage(1); // İlk sayfaya git
  };

  const handleGoToLastPage = () => {
    setPage(59); // İlk sayfaya git
  };

  return (
    <div className="flex justify-center items-center mt-6 space-x-4 sm:space-x-2">
      <button
        onClick={handleGoToFirstPage}
        disabled={page === 1}
        className="px-6 py-3 sm:px-3 sm:py-2 bg-secondText text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-custom-gradient"
      >
        <IterationCw className="w-5 h-5 sm:w-4 sm:h-4" />
      </button>
      <button
        onClick={handlePrevPage}
        disabled={page === 1}
        className="px-4 py-2 sm:px-3 sm:py-2 bg-blueText text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-custom-gradient"
      >
        <ArrowLeft className="w-5 h-5 sm:w-4 sm:h-4" />
      </button>
      <span className="text-lg text-gray-700 font-medium  ">
         {page} / {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={page === totalPages}
        className="px-4 py-2 sm:px-3 sm:py-2 bg-blueText text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-custom-gradient"
      >
        <MoveRight className="w-5 h-5 sm:w-4 sm:h-4" />
      </button>
      <button
        onClick={handleGoToLastPage}
        disabled={page === totalPages}
        className="px-4 py-2 sm:px-3 sm:py-2 bg-secondText text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-custom-gradient"
      >
        <IterationCcw className="w-5 h-5 sm:w-4 sm:h-4" />
      </button>
    </div>
  );
  
};

export default Pagination;