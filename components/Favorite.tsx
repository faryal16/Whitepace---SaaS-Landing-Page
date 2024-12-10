import Image from 'next/image'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'

function Favorite() {
  return (
    <div className=" relative z-10 min-h-screen w-full flex flex-col lg:grid lg:grid-cols-2 px-4 sm:px-6 md:px-10 lg:px-28 py-10 sm:py-16 md:py-20 lg:py-28 bg-[#043873] items-center gap-8 lg:gap-12">
       <Image 
        src="/images/vector1.png" // Make sure this path matches your image location
        alt="background"
        fill
        className="object-cover  absolute z-0 opacity-5"
      />
      {/* Image Section */}
      <div className="w-full flex justify-center items-center order-1 lg:order-none">
        <Image 
          src='/images/Apps.png' 
          alt='app image' 
          width={400} 
          height={400}
          className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-auto transition-all duration-300"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="w-full flex items-center justify-center lg:pl-[32px] order-2 lg:order-none">
        <div className="flex text-white flex-col w-full max-w-[500px] gap-y-4 sm:gap-y-5 md:gap-y-6 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Work with Your Favorite Apps Using whitepace
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90">
            Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
          </p>
          <button className='py-3 sm:py-4 px-6 bg-[#4F9CF9] text-white rounded-lg hover:bg-[#3d7cc7] transition-colors duration-300 w-[180px] sm:w-[200px] md:w-[220px] flex items-center justify-center lg:justify-start mx-auto lg:mx-0 mt-6 sm:mt-8 md:mt-10'>
            <span className="text-base sm:text-lg">Read more</span>
            <GoArrowRight className='ml-2 text-lg sm:text-xl' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Favorite

