import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <nav className='flex justify-between items-center py-4'>
        <div className='logo text-[30px] text-blue-600 font-semibold'>Car<span className='text-black'>Store</span></div>
        <ul className='flex gap-10 text-[20px]'>
          <li><Link href='/' className='text-blue-600 hover:text-gray-500'>Home</Link></li>
          <li><Link href='/about' className='text-blue-600 hover:text-gray-500'>About</Link></li>
          <li><Link href='/services' className='text-blue-600 hover:text-gray-500'>Services</Link></li>
          <li><Link href='#' className='text-blue-600 hover:text-gray-500'>Contact</Link></li>
        </ul>
      </nav>
      <h1 className='text-[60px] text-black-600 text-center'>Welcome to CarStore</h1>
      <p className='text-center text-gray-500 my-4'>
        <button className='bg-blue-600 text-white px-4 py-2 rounded-lg'>Get Started</button>
      </p>
      <Image src='/React-Nextjs-Project/images/hero-group.png' alt='car' width={20} height={20} className='w-3/4 m-auto object-cover' />
    </div>
  )
}

export default Header
