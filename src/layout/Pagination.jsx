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
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={handlePrevPage}
        disabled={page === 1}
        className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span className="px-4 py-2 mx-1">
        Page {page} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={page === totalPages}
        className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;