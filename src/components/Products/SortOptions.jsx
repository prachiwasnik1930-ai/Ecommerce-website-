import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    const sortBy = e.target.value;   // ✅ fixed
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);
  };

  return (
    <div className='mb-4 flex items-center justify-end'>
      <select
        id='sort'
        onChange={handleSortChange}
        className='border p-2 rounded focus:outline-none'
      >
        <option value="">Default</option>
        <option value="priceAsc">Price: Low - High</option>
        <option value="priceDesc">Price: High - Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
};

export default SortOptions;