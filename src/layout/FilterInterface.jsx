import React, { useState } from 'react';

const FilterInterface = ({ setSort, setFilter }) => {
  const [filterInput, setFilterInput] = useState('');

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleFilterInputChange = (e) => {
    setFilterInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini engeller
    setFilter(filterInput); // Filtreleme işlemini gerçekleştirir
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 pb-0">
      <div className="mb-6 text-center">
        <h2 className="text-lg sm:text-xl font-semibold text-secondText">Showing all 12 results</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-between">
        {/* Views Section */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-500">Views:</span>
          <div className="flex gap-2">
            <button type="button" className="h-10 w-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center shadow-sm hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105">
              <svg className="h-5 w-5 text-secondText" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h8M4 10h8M4 14h8M4 18h8M16 6h4M16 10h4M16 14h4M16 18h4" />
              </svg>
            </button>
            <button type="button" className="h-10 w-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center shadow-sm hover:bg-gray-100 transition-all duration-200 ease-in-out transform hover:scale-105">
              <svg className="h-5 w-5 text-secondText" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
  
        {/* Sorting and Filter Inputs */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full">
          <div className="w-full sm:w-[160px]">
            <select onChange={handleSortChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-blueText transition-all duration-200 ease-in-out">
              <option value="">Select Sort</option>
              <option value="price:asc">Price: Low to High</option>
              <option value="price:desc">Price: High to Low</option>
              <option value="rating:asc">Rating: Low to High</option>
              <option value="rating:desc">Rating: High to Low</option>
            </select>
          </div>
  
          <input
            type="text"
            value={filterInput}
            onChange={handleFilterInputChange}
            className="w-full sm:w-64 border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blueText transition-all duration-200 ease-in-out"
            placeholder="Filter products"
          />
  
          <button type="submit" className="w-full sm:w-auto bg-blueText hover:bg-custom-gradient text-white px-6 py-3 rounded-lg text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 ease-in-out">
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};  

export default FilterInterface;