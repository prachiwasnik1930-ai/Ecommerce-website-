import React, { useEffect, useState } from 'react'
import {  useNavigate, useSearchParams } from 'react-router-dom'

const FilteredSideBar = () => {
  const [searchParams , setSearchParam] = useSearchParams()
  const navigate = useNavigate("")
  const [filters, setFilters]= useState({
    category: "",

    gender: "",
    color : "",

    size : [],
    material : [],
    brand : [],
    minPrice : 0,
    maxPrice: 100,
  });
  const [priceRange , setPriceRange]= useState([0,100]);

  const categories = ["Top wear","Bottom Wear"];
  const color = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "White",
    "purple",
    "Navy",
    "Pink",
    "orange",
    "Gray"
  ]

  const size = [
    "XS",
    "S",
    "M",
    "Xl",
    "XXL"
  ]

  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Silk",
    "Linen",
    "Fleece"
  ]

  const brands = [
    "Urban Style",
    "Street Style Fashion",
    "Stylish Wardrobe",
    "Chick Style",
    "Beach Breeze"

  ]

  const genders = ["Male" , "Female"]

  useEffect(()=>{
    const params = Object.fromEntries([...searchParams])
     setFilters({
     category : params.category || "",
     gender : params.gender || " ",
     color : params.gender || "",
     size : params.size? params.size.split(",") : [],
     material : params.material? params.material.split(",") : [],
     brand : params.brand? params.brand.split(",") : [],
     minPrice : params.minPrice ||0,
     maxPrice  : params.maxPrice || 100
  })
  setPriceRange([0, params.maxPrice || 100])
  },[searchParams])

  const handleFilterChange = (e) => {
  const { name, value, checked, type } = e.target;
  let newFilters = { ...filters };

  if (type === "checkbox") {
    if (checked) {
      newFilters[name] = [...newFilters[name], value];
    } else {
      newFilters[name] = newFilters[name].filter((item) => item !== value);
    }
  } else if (type === "radio") {
    newFilters[name] = value;
  } else {
    // for color button
    newFilters[name] = value;
  }

  setFilters(newFilters);
  console.log(newFilters);
  updateURlParams(newFilters)
};

const updateURlParams = (newFilters)=>{
  const params = new URLSearchParams()

  Object.keys(newFilters).forEach((Key)=>{
    if(Array.isArray(newFilters[Key]) && newFilters[Key].length > 0){
      params.append(Key,newFilters[Key].join(","))
    }else if(newFilters[Key]){
     params.append(Key,newFilters[Key])
    }
  })
  setSearchParam(params)
  navigate(`?${params.toString()}`)// catergory bottomwear and top wear

}

const handlePriceChange=(e)=>{
const newPrice = e.target.value;
setPriceRange([0,newPrice])
const newFilters = {...filters , minPrice : 0 , maxPrice : newPrice}
setFilters(filters)
updateURlParams(newFilters)
}
 


    return (
    <div className='p-4'>
      <h2 className='text-xl font-medium text-gray-800 mb-4'>Filter</h2>

      {/* Category filter  */}
      <div className="mb-6">
        <label className='block text-gray-600 font-medium mb-2'>Category</label>
       { categories.map((category)=>(
        <div key={category} className='flex items-center mb-1'>
          <input type="radio" name="category"
          value={category}
          onChange={handleFilterChange}
          checked={filters.category === category}
          className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300' />
          <span className='text-gray-700'>{category}</span>
        </div>
       ))}
      </div>

      {/* Gender filter  */}
      <div className="mb-6">
        <label className='block text-gray-600 font-medium mb-2'>Gender</label>
       {genders.map((gender)=>(
        <div key={gender} className='flex items-center mb-1'>
          <input type="radio" name="gender" 
          value={gender}
          onChange={handleFilterChange}
           checked={filters.gender === gender}
          className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300' />
          <span className='text-gray-700'>{gender}</span>
        </div>
       ))}
      </div>

      {/* colors */}
      <div className="mb-6">
        <label className='block text-gray-600 font-medium mb-2'>Color</label>
        <div className="flex flex-wrap gap-2">
          {color.map((color)=>(
            <button key={color} name='color'
            value={color}
            onClick={handleFilterChange}
            
            className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105
               ${filters.color === color ? "ring-2 ring-blue-500" : ""}`}
            style={{backgroundColor : color.toLowerCase()}}
            ></button>
          ))}
        </div>
      </div>

      {/* size filter */}

      <div className="mb-6 " >
        <label className='block text-gray-600 font-medium mb-2'>
         Size
        </label>
        {size.map((size)=>(
          <div key={size} className='flex items-center mb-1'>
            <input type="checkbox" name="size" 
            value={size}
            onChange={handleFilterChange}
            checked={filters.size.includes(size)}
            className='mr-2 h-4 w-4 text-blue-500
            focus:ring-blue-400 border-gray-300
            ' />
            <span className='text-gray-700'>{size}</span>
          </div>
        ))}
      </div>
       
      {/* material filter */}

       <div className="mb-6 " >
        <label className='block text-gray-600 font-medium mb-2'>
         Material
        </label>
        {materials.map((materials)=>(
          <div key={materials} className='flex items-center mb-1'>
            <input type="checkbox" name="material" value={materials} 
            onChange={handleFilterChange}
            checked={filters.material.includes(materials)}
            className='mr-2 h-4 w-4 text-blue-500
            focus:ring-blue-400 border-gray-300
            ' />
            <span className='text-gray-700'>{materials}</span>
          </div>
        ))}
      </div>

      {/* Brand filter */}

       <div className="mb-6 " >
        <label className='block text-gray-600 font-medium mb-2'>
         Brand
        </label>
        {brands.map((brands)=>(
          <div key={brands} className='flex items-center mb-1'>
           <input type="checkbox" name="brand" value={brands} 
            onChange={handleFilterChange}
             checked={filters.brand.includes(brands)}
            className='mr-2 h-4 w-4 text-blue-500
            focus:ring-blue-400 border-gray-300
            ' />
            <span className='text-gray-700'>{brands}</span>
          </div>
        ))}
      </div>

      {/* Price range filter  */}

      <div className="mb-8">
        <label className='block text-gray-600 font-medium mb-2'>Price Range</label>
        <input type="range" name='priceRange' min={0} max={100}
        value={priceRange[1]}
        onChange={handlePriceChange}
        className='w-full h-full bg-gray-300 1875rem
        rounded-lg appearance-none cursor-pointer
        '/>
      <div className="flex justify-between text-gray-600 mt-2">
        <span>
          $0
        </span>

        <span>
          ${priceRange[1]}
        </span>
      </div>
      </div>
    </div>
  )
}

export default FilteredSideBar