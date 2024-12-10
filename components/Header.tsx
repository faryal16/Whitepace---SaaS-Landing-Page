import Image from 'next/image';
import React from 'react'
import { GoArrowRight } from 'react-icons/go';
import { RxCaretDown } from "react-icons/rx";
import { GiHamburgerMenu } from 'react-icons/gi';

function Header() {
  return (
    <nav className='flex flex-row bg-[#043873] mx-auto py-2 px-2 text-white justify-between items-center'>
      <div className='font-semibold text-xl flex items-center'>
        <span>
          <Image 
            src='/images/Logo Icon.png' 
            alt="white logo" 
            className='mt-1' 
            width={20} 
            height={20} 
          />
        </span>
        <p className='ml-1'>WhiteSpace</p>
      </div>
      <div className='flex items-center'>
        {/* List items hidden below lg breakpoint */}
        <ul className='hidden md:flex items-center gap-2 text-xl'>
          <div className='flex'>
            <li>Products</li>
            <RxCaretDown className='mt-1 ml-1' />
          </div>
          <div className='flex'>
            <li>Solutions</li>
            <RxCaretDown className='mt-1 ml-1' />
          </div>
          <div className='flex'>
            <li>Resources</li>
            <RxCaretDown className='mt-1 ml-1' />
          </div>
          <div className='flex'>
            <li>Pricing</li>
            <RxCaretDown className='mt-1 ml-1' />
          </div>
        </ul>

        {/* Buttons visible until sm breakpoint */}
        <div className='hidden sm:flex gap-2 ml-2'>
          <button className='py-2 px-4 bg-[#FFE492] text-[#043873] rounded-[8px] text-sm'>
            Login
          </button>
          <button className='py-2 px-4 bg-[#4F9CF9] text-[white] rounded-[8px] flex items-center text-sm'>
            Try Whitepace free <GoArrowRight className='ml-2' />
          </button>
        </div>
        
        {/* Hamburger visible until lg breakpoint */}
        <div className='md:hidden ml-2'>
          <GiHamburgerMenu size={24} />
        </div>
      </div>
    </nav>
  )
}

export default Header
