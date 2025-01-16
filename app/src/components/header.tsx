import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <div>
      <nav className='flex justify-between items-center py-4'>
        <div className='logo text-[30px] text-blue-600 font-semibold'>Car<span className='text-black'>Store</span></div>
        <ul className='flex gap-10 text-[20px]'>
          <li><a href='#' className='text-blue-600 hover:text-gray-500'>Home</a></li>
          <li><a href='#' className='text-blue-600 hover:text-gray-500'>About</a></li>
          <li><a href='#' className='text-blue-600 hover:text-gray-500'>Services</a></li>
          <li><a href='#' className='text-blue-600 hover:text-gray-500'>Contact</a></li>
        </ul>
      </nav>
      <h1 className='text-[60px] text-black-600 text-center'>Welcome to CarStore</h1>
      <p className='text-center text-gray-500 my-4'>
        <button className='bg-blue-600 text-white px-4 py-2 rounded-lg'>Get Started</button>
      </p>
      <Image src='/images/hero-group.png' alt='car' width={20} height={20} className='w-full object-cover' />
    </div>
  )
}

export default Header
