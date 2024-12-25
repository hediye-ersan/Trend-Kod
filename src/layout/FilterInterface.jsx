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
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-base text-gray-500">Showing all 12 results</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm">Views:</span>
          <div className="flex gap-1">
            <button type="button" className="h-9 w-9 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100">
              <svg className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h8M4 10h8M4 14h8M4 18h8M16 6h4M16 10h4M16 14h4M16 18h4" />
              </svg>
            </button>
            <button type="button" className="h-9 w-9 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100">
              <svg className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <select onChange={handleSortChange} className="w-[160px] border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Sort</option>
              <option value="price:asc">Price: Low to High</option>
              <option value="price:desc">Price: High to Low</option>
              <option value="rating:asc">Rating: Low to High</option>
              <option value="rating:desc">Rating: High to Low</option>
            </select>
          </div>
          <input type="text" value={filterInput} onChange={handleFilterInputChange} className="border border-gray-300 rounded px-4 py-2" placeholder="Filter products" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Filter</button>
        </div>
      </form>
    </div>
  );
};

export default FilterInterface;