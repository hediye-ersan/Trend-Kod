'use client'

 function FilterInterface() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-base text-gray-500">Showing all 12 results</h2>
      </div>
      
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        {/* Views Section */}
        <div className="flex items-center gap-3">
          <span className="text-sm">Views:</span>
          <div className="flex gap-1">
            <button className="h-9 w-9 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100">
              <svg className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h8M4 10h8M4 14h8M4 18h8M16 6h4M16 10h4M16 14h4M16 18h4" />
              </svg>
            </button>
            <button className="h-9 w-9 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100">
              <svg className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Sort and Filter Section */}
        <div className="flex gap-3">
          {/* Select Dropdown */}
          <div className="relative">
            <select className="w-[160px] border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="most-popular">Most Popular</option>
              <option value="least-popular">Least Popular</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>

          {/* Filter Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Filter
          </button>
        </div>
      </div>
    </div>
  )
}
export default FilterInterface;
