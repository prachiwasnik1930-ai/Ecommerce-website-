import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { TbBrandMeta } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Newsletter
          </h3>

          <div className="space-y-2 mb-4">
            <p className="text-sm text-gray-600">
              Be the first to hear about new products, exclusive events and online offers
            </p>
            <p className="text-sm text-gray-600">
              Sign up and get 10% off on your first order
            </p>
          </div>

          {/* Newsletter form */}
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm
              border border-gray-300 rounded-l-md
              focus:outline-none focus:ring-2 focus:ring-gray-500
              transition-all"
              required
            />

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md
              hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* shop links */}
        <div>
          <div className="text-lg text-gray-800 mb-4 ">shop</div>
          <ul className='space-y-2 text-gray-600'>
            <li>
             <Link to="#" className='hover:text-gray-500'>Men's top Wear</Link>
            </li>

             <li>
             <Link to="#" className='hover:text-gray-500'>Women's top Wear</Link>
            </li>

             <li>
             <Link to="#" className='hover:text-gray-500'>Men's bottom Wear</Link>
            </li>

             <li>
             <Link to="#" className='hover:text-gray-500'>Women's top Wear</Link>
            </li>
          </ul>
        </div>

        {/* support links */}

         <div>
          <div className="text-lg text-gray-800 mb-4 ">Suport</div>
          <ul className='space-y-2 text-gray-600'>
            <li>
             <Link to="#" className='hover:text-gray-500'>Contact us</Link>
            </li>

             <li>
             <Link to="#" className='hover:text-gray-500'>About us</Link>
            </li>

             <li>
             <Link to="#" className='hover:text-gray-500'>FAQ'S</Link>
            </li>

             <li>
             <Link to="#" className='hover:text-gray-500'>Features</Link>
            </li>
          </ul>
        </div>

        {/* follow us */}
        <div>
          <div className="text-lg text-gray-500 mb-4">Follow us</div>
          <div className='flex items-center mb-6 space-x-4'>
            <a href="https://www.facebook.com" target="_blank" rel='noopener noreferrer'
            className='text-gray-500'
            >
              <TbBrandMeta className='h-5 w-5'/>
            </a>

            <a href="https://www.facebook.com" target="_blank" rel='noopener noreferrer'
            className='text-gray-500'
            >
              <IoLogoInstagram className='h-5 w-5'/>
            </a>

            <a href="https://www.facebook.com" target="_blank" rel='noopener noreferrer'
            className='text-gray-500'
            >
              <RiTwitterXLine className='h-5 w-5'/>
            </a>
          </div>
          <p className='text-gray-500'>call us</p>
          <p>
        <FiPhoneCall className='inline-block m2-2'/>
         2343648283729

          </p>
        </div>



      </div>
      {/* footer bottom */}

      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className='text-gray-500 text-sm tracking-tighter text-center'>
         © 2025 , scalefull technologies , All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
