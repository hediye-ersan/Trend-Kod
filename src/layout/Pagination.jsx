import React from 'react';

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

  return (
    <div className="flex justify-center items-center mt-6 space-x-4">
      <button
        onClick={handlePrevPage}
        disabled={page === 1}
        className="px-6 py-3 bg-blueText text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-custom-gradient"
      >
        Previous
      </button>
      <span className="text-lg text-gray-700 font-medium">
        Page {page} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={page === totalPages}
        className="px-6 py-3 bg-blueText text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-custom-gradient"
      >
        Next
      </button>
    </div>
  );

};

export default Pagination;